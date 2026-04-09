import re

text = open("domande/busta_d.js", encoding="utf-8").read()

# Fix: restore missing comma - any } followed immediately by newline + "spiegazioneId"
text = re.sub(r'\}\n(\s+"spiegazioneId")', r'},\n\1', text)

open("domande/busta_d.js", "w", encoding="utf-8").write(text)
print("Fixed comma, done")
