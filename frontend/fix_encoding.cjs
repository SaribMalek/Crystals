const fs = require('fs');
const path = require('path');

const filesToFix = [
    'package.json',
    'vite.config.js',
    'index.html',
    'src/main.jsx',
    'src/App.jsx',
    'src/index.css',
    'src/components/Header.jsx',
    'src/components/Hero.jsx',
    'src/components/ProductCard.jsx',
    'src/components/Footer.jsx',
    'src/pages/Home.jsx'
];

filesToFix.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Remove BOM if it exists
        if (content.charCodeAt(0) === 0xFEFF) {
            content = content.slice(1);
        }
        fs.writeFileSync(filePath, content, { encoding: 'utf8' });
        console.log(`Fixed ${file}`);
    }
});
