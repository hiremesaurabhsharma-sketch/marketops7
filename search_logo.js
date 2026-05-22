const fs = require('fs');
const css = fs.readFileSync('c:/Users/hirem/anti2/markeetops2/styles.css', 'utf8');
const lines = css.split('\n');
lines.forEach((line, index) => {
  if (line.includes('logo') || line.includes('logo-text')) {
    console.log(`${index + 1}: ${line}`);
  }
});
