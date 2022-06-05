import { readFile } from 'fs/promises';
import { fileURLToPath } from "url";
import FileSystemError from '../utils/FileSystemError.js';

export const read = async () => {
  const fileToRead = fileURLToPath(new URL('files/fileToRead.txt', import.meta.url));
  try {
    await readFile(fileToRead)
      .then(data => process.stdout.write(data))
      .catch(() => {
        throw new FileSystemError('FS operation failed: there\'s no file fileToRead.txt');
      });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

};

read();
