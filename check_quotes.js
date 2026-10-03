const fs = require('fs');
const files = [
  'src/data/courses_tle_math_l_part1.ts',
  'src/data/courses_tle_math_l_part2.ts',
  'src/data/courses_tle_math_s_part1.ts',
  'src/data/courses_tle_math_s_part2.ts',
  'src/data/courses_tle_math_s_part3.ts',
  'src/data/courses_tle_math_s_part4.ts',
  'src/data/courses_tle_pc_l_part1.ts',
  'src/data/courses_tle_pc_l_part2.ts',
  'src/data/courses_tle_pc_s_part1.ts',
  'src/data/courses_tle_pc_s_part2.ts',
  'src/data/courses_tle_pc_s_part3.ts',
  'src/data/courses_tle_pc_s_part4.ts'
];
let count = 0;
for (const f of files) {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('`') && l.includes("'")) {
      console.log(f, i + 1, l.slice(0, 80));
      count++;
    }
  }
}
console.log('Total lines with both:', count);
