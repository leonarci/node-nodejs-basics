import { readdir } from 'fs/promises';
import { fileURLToPath } from "url";
import { extname, basename } from 'path';
import FileSystemError from '../utils/FileSystemError.js';

export const list = async () => {
  const folderToList = fileURLToPath(new URL('files', import.meta.url));
  const fileNames = [];
  const files = await readdir(folderToList, { withFileTypes: true })
    .catch(() => {
      throw new FileSystemError('FS operation failed: <files> folder doesn\'t exists');
    });
  files.forEach(file => {
    if (!file.isFile()) return;
    if (basename(file.name, extname(file.name))) {
      fileNames.push(basename(file.name, extname(file.name)));
    } else {
      fileNames.push(file.name);
      // }
    }
  });
  // If argument --line is passed prints one name per line
  // otherwise (by default) array of names
  if (process.argv.includes('--line')) {
    fileNames.forEach(fileName => console.log(fileName));
  } else {
    console.log(fileNames);
  }
};

list();
