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
