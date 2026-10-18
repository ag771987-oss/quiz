import re, sys, pathlib
d = pathlib.Path(sys.argv[1])
Q7 = re.compile(r'^\s{2,8}(\d{1,2})\s{3,}\S')
QN = re.compile(r'^\s{0,4}(\d{1,2})\s?\)')
OPT = re.compile(r"^\s{0,16}([A-E])[\s_]+\S")
for f in sorted(d.glob('*.txt')):
    if 'risposte' in f.name: continue
    rx = Q7 if 'cc07' in f.name else QN
    qs, cur = [], None
    for line in f.read_text().splitlines():
        m = rx.match(line)
        if m and (not qs or int(m.group(1)) == qs[-1][0] + 1):
            cur = [int(m.group(1)), set()]; qs.append(cur); continue
        o = OPT.match(line)
        if o and cur: cur[1].add(o.group(1))
    nums = [q[0] for q in qs]
    pochi = [q[0] for q in qs if len(q[1]) < 3]
    print(f"{f.stem:22} quesiti={len(qs):3} ultimo={nums[-1] if nums else '-':>3} sequenza_ok={nums==list(range(1,len(nums)+1))} opzioni<3: {pochi}")
