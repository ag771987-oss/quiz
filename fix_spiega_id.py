import re, sys

path = r'c:\Users\aless\Desktop\github\quiz\domande\busta_d.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove comma + spiegazioneId line: `,\n    "spiegazioneId": <value>` -> ``
fixed = re.sub(r',\n    "spiegazioneId": (?:null|\d+)', '', content)

remaining = len(re.findall(r'spiegazioneId', fixed))
print(f'Remaining spiegazioneId: {remaining}')

with open(path, 'w', encoding='utf-8') as f:
    f.write(fixed)
print('Done')
