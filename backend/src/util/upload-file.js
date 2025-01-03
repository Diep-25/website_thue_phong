
const path = require('path');
const fs = require('fs');
module.exports = {
    uploadFile : function(file, folder, fileName) {
        const directoryPath = path.join(__dirname, '../../', 'public', 'assets', 'images', folder);

        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }

        const filePath = path.join(directoryPath, fileName);
        file.mv(filePath, (err) => {
            if (err) {
                throw new Error(`File upload failed: ${err.message}`);
            }
        });

        const imagePatch = path.join('assets', 'images', folder, fileName);
        return imagePatch;
    },
    
}
