const fs = require('fs');
const dir = './src/pages/';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.astro')) {
    let content = fs.readFileSync(dir+file, 'utf8');
    // Replace .png with .webp correctly
    content = content.replace(/\/assets\/images\/([a-zA-Z0-9_-]+)\.png/g, '/assets/images/$1.webp');
    fs.writeFileSync(dir+file, content);
  }
});
console.log('Fixed image paths');
