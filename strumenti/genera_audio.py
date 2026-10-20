#!/usr/bin/env python3
"""Crea i file audio delle pillole normative (pillole/audio/<id>.mp3) dal campo «parlato».

Voce: Piper (sintesi vocale offline, https://github.com/OHF-Voice/piper1-gpl) con la voce italiana
it_IT-paola-medium (https://huggingface.co/rhasspy/piper-voices/tree/main/it/it_IT/paola/medium).
Il volume è normalizzato come chiede Alexa (-14 LUFS, picco -2 dBFS); serve ffmpeg.

Preparazione (una volta, fuori dalla repo):
    python3 -m venv <LAVORO>/piper && <LAVORO>/piper/bin/pip install piper-tts
    scaricare it_IT-paola-medium.onnx e .onnx.json nella stessa cartella

Uso: python3 strumenti/genera_audio.py <piper> <voce.onnx> [--tutte]
Rigenera solo le pillole il cui parlato è cambiato: impronta e durata sono in pillole/audio/impronte.json
(la durata serve al podcast, così la rigenerazione quotidiana del feed non ha bisogno di ffmpeg).
Poi: node strumenti/verifica_pillole.js --scrivi
"""
import hashlib, json, os, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIR = os.path.join(ROOT, "pillole", "audio")
PIPER, VOCE = sys.argv[1], sys.argv[2]
TUTTE = "--tutte" in sys.argv

pillole = json.loads(subprocess.check_output(["node", os.path.join(ROOT, "strumenti", "verifica_pillole.js"), "--json"]))
os.makedirs(DIR, exist_ok=True)
FILE_IMPRONTE = os.path.join(DIR, "impronte.json")
impronte = json.load(open(FILE_IMPRONTE)) if os.path.exists(FILE_IMPRONTE) else {}
voce = os.path.basename(VOCE)
fatte = 0
for p in pillole:
    imp = hashlib.sha256((voce + "\n" + p["parlato"]).encode()).hexdigest()
    mp3 = os.path.join(DIR, p["id"] + ".mp3")
    if not TUTTE and (impronte.get(p["id"]) or {}).get("impronta") == imp and os.path.exists(mp3):
        continue
    with tempfile.TemporaryDirectory() as tmp:
        wav = os.path.join(tmp, "p.wav")
        subprocess.run([PIPER, "-m", VOCE, "-f", wav, "--sentence-silence", "0.35"],
                       input=p["parlato"].encode(), check=True, capture_output=True)
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", wav,
                        "-af", "adelay=400,apad=pad_dur=0.8,loudnorm=I=-14:TP=-2:LRA=11",
                        "-ar", "44100", "-ac", "1", "-b:a", "64k",
                        "-metadata", "title=" + p["titolo"], "-metadata", "artist=Pillole normative", mp3], check=True)
    durata = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp3]))
    impronte[p["id"]] = {"impronta": imp, "secondi": round(durata)}
    fatte += 1
    print("✔", p["id"])
for vecchio in set(impronte) - {p["id"] for p in pillole}:   # pillole eliminate
    impronte.pop(vecchio)
    if os.path.exists(os.path.join(DIR, vecchio + ".mp3")):
        os.remove(os.path.join(DIR, vecchio + ".mp3"))
json.dump(impronte, open(FILE_IMPRONTE, "w"), indent=2, sort_keys=True)
print(f"Audio generati: {fatte}; invariati: {len(pillole) - fatte}")
