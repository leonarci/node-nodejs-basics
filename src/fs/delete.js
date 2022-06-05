import { unlink, access } from 'fs/promises';
import { fileURLToPath } from "url";
import FileSystemError from '../utils/FileSystemError.js';

export const remove = async () => {
  const fileToDelete = fileURLToPath(new URL('files/fileToRemove.txt', import.meta.url));

  try {
    await unlink(fileToDelete).catch(() => {
      throw new FileSystemError('FS operation failed: there\'s no file fileToRemove.txt');
    });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

};

remove();
