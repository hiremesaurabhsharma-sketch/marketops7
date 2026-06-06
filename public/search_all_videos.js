const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/hirem/anti2/markeetops2';
const files = fs.readdirSync(dir);
files.forEach(file => {
  if (file.endsWith('.html')) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const matches = content.match(/<video[^>]*src="([^"]+)"/g);
    if (matches) {
      console.log(`${file}:`);
      matches.forEach(m => console.log(`  ${m}`));
    }
  }
});
