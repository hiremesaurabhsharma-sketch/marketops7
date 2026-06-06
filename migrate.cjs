const fs = require('fs');
const path = require('path');

const oldDir = path.join(__dirname, 'old_website');
const newDir = path.join(__dirname, 'src', 'pages');

const filesToMigrate = [
  'performance_marketing.html',
  'website_design.html',
  'seo.html',
  'marketing_creative.html',
  'overseas_business.html',
  'case_studies.html',
  'contact.html'
];

filesToMigrate.forEach(file => {
  const filePath = path.join(oldDir, file);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf-8');
    
    let content = html;
    
    // Extract everything after <!-- MOBILE DRAWER MENU --> ... </div> and before <!-- FOOTER -->
    // Since regex can be tricky with HTML, we'll find the indices if possible.
    
    let startIndex = 0;
    let endIndex = content.length;
    
    // Find the end of the mobile drawer or header
    const drawerMatch = content.indexOf('<!-- MOBILE DRAWER MENU -->');
    if (drawerMatch !== -1) {
      // Find the closing div of the drawer. It's usually just before the next section
      const nextSectionMatch = content.indexOf('<!--', drawerMatch + 20);
      if (nextSectionMatch !== -1) {
        startIndex = nextSectionMatch;
      }
    } else {
      const headerEnd = content.indexOf('</header>');
      if (headerEnd !== -1) {
        startIndex = headerEnd + 9;
      }
    }
    
    const footerMatch = content.indexOf('<!-- FOOTER -->');
    if (footerMatch !== -1) {
      endIndex = footerMatch;
    } else {
      const footerTagMatch = content.indexOf('<footer');
      if (footerTagMatch !== -1) {
        endIndex = footerTagMatch;
      }
    }
    
    let extractedContent = content.substring(startIndex, endIndex);
    
    // Extract title and description from <head>
    let title = "MarketOps";
    let desc = "";
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    if (titleMatch) title = titleMatch[1];
    const descMatch = html.match(/<meta name="description" content="(.*?)">/i);
    if (descMatch) desc = descMatch[1];
    
    const astroContent = `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="${title}" description="${desc}">
  ${extractedContent.trim()}
</Layout>
`;

    const newFileName = file.replace('.html', '.astro');
    fs.writeFileSync(path.join(newDir, newFileName), astroContent);
    console.log(`Migrated ${file} to ${newFileName}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
