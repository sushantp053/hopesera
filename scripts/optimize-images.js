const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const MAX_SIZE_MB = 1; // Maximum size in MB

// Get all image files from public directory (excluding SVGs)
async function optimizeImages() {
  const files = fs.readdirSync(PUBLIC_DIR);
  
  for (const file of files) {
    // Skip SVG files and directories
    if (file.endsWith('.svg') || !file.match(/\.(png|jpg|jpeg|webp)$/i)) {
      continue;
    }
    
    const filePath = path.join(PUBLIC_DIR, file);
    const stats = fs.statSync(filePath);
    const fileSizeMB = stats.size / (1024 * 1024);
    
    // Only optimize files larger than the max size
    if (fileSizeMB > MAX_SIZE_MB) {
      console.log(`Optimizing ${file} (${fileSizeMB.toFixed(2)}MB)...`);
      
      // Create optimized version
      const optimizedPath = path.join(PUBLIC_DIR, `optimized-${file}`);
      
      try {
        await sharp(filePath)
          .resize(800) // Resize to reasonable dimensions
          .jpeg({ quality: 80 }) // Adjust quality
          .toFile(optimizedPath);
        
        // Replace original with optimized version
        fs.unlinkSync(filePath);
        fs.renameSync(optimizedPath, filePath);
        
        const newStats = fs.statSync(filePath);
        const newSizeMB = newStats.size / (1024 * 1024);
        
        console.log(`  → Reduced to ${newSizeMB.toFixed(2)}MB (${((1 - newSizeMB / fileSizeMB) * 100).toFixed(1)}% reduction)`);
      } catch (err) {
        console.error(`  → Error optimizing ${file}:`, err);
      }
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages();