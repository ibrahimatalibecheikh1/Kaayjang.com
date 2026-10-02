const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/data');
const files = ['courses_1ere_francais_part3.ts', 'courses_5eme_education_civique_part2.ts'];

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/fullText:\s*`([\s\S]*?)`/g, (match, text) => {
    let lines = text.split('\n');
    let firstGoodLineIdx = 0;
    for (let i = 0; i < Math.min(lines.length, 10); i++) {
      const line = lines[i].trim();
      if (!line) { firstGoodLineIdx = i + 1; continue; }
      if (
        /^GUIDE\s+OFFICIEL/i.test(line) ||
        /^DOCUMENT\s+DE\s+RÉFÉRENCE/i.test(line) ||
        /^PROGRAMME\s+D['’]ÉDUCATION/i.test(line) ||
        /^CLASSE\s+DE\s+5/i.test(line) ||
        /^Cours\s+complets\s+avec/i.test(line)
      ) {
        firstGoodLineIdx = i + 1;
      } else {
        break;
      }
    }
    const cleanedText = lines.slice(firstGoodLineIdx).join('\n').replace(/^\s+/, '');
    return 'fullText: `' + cleanedText + '`';
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned:', file);
}
