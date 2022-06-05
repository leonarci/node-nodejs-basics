import { rename as fsRename, access } from 'fs/promises';
import { fileURLToPath } from "url";
import FileSystemError from '../utils/FileSystemError.js';
import { existFile } from '../utils/existFile.js';
const oldPath = fileURLToPath(new URL('files/wrongFilename.txt', import.meta.url));
const newPath = fileURLToPath(new URL('files/properFilename.md', import.meta.url));

export const rename = async () => {
  try {
    const existNewPath = await existFile(newPath);
    if (!existNewPath) {
      await fsRename(oldPath, newPath)
        .catch(() => {
          throw new FileSystemError('FS operation failed: there\'s no file wrongFilename.txt');
        });
    } else {
      throw new FileSystemError('FS operation failed: properFilename.md already exists');
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

};

rename();


// import { rename as reName, access } from 'fs/promises';
// import { constants } from 'fs';
// import { fileURLToPath } from "url";
// import { join } from 'path';
// const __dirname = fileURLToPath(new URL('.', import.meta.url));
// const oldPath = join(__dirname, 'files/wrongFilename.txt');
// const newPath = join(__dirname, 'files/properFilename.md');

// export const rename = async () => {
//   const exist = await access(newPath, constants.F_OK)
//     .then(() => true).catch(() => false);

//   if (exist) {
//     // TODO create custom Error and specify line and stack
//     throw new Error('FS operation failed');
//   } else {
//     reName(oldPath, newPath)
//       // TODO create custom Error and specify line and stack
//       .catch(() => { throw new Error('FS operation failed'); });
//   }

// };

// rename();
