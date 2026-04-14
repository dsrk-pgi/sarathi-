const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const createSVG = (width, height, color, text = '') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  ${text ? `<text x="50%" y="50%" font-family="Arial" font-size="120" fill="#F59E0B" text-anchor="middle" dominant-baseline="middle" font-weight="bold">${text}</text>` : ''}
</svg>`;
};

const assets = [
  { name: 'icon.png', width: 1024, height: 1024, color: '#1E3A8A', text: 'सारथी' },
  { name: 'splash.png', width: 1242, height: 2436, color: '#1E3A8A', text: 'सारथी' },
  { name: 'adaptive-icon.png', width: 1024, height: 1024, color: '#1E3A8A', text: 'सारथी' },
  { name: 'favicon.png', width: 48, height: 48, color: '#1E3A8A', text: '' },
  { name: 'notification-icon.png', width: 96, height: 96, color: '#1E3A8A', text: '' },
];

console.log('Creating placeholder assets...\n');

assets.forEach(asset => {
  const svgContent = createSVG(asset.width, asset.height, asset.color, asset.text);
  const svgPath = path.join(assetsDir, asset.name.replace('.png', '.svg'));
  fs.writeFileSync(svgPath, svgContent);
  console.log(`✓ Created ${asset.name.replace('.png', '.svg')}`);
});

console.log('\n📝 Note: SVG files created as placeholders.');
console.log('For production, convert these to PNG files or create proper designs.');
console.log('\nYou can use online tools like:');
console.log('- https://www.figma.com');
console.log('- https://www.canva.com');
console.log('- https://cloudconvert.com/svg-to-png (to convert SVG to PNG)\n');
