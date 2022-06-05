import { access, readdir, mkdir, copyFile } from 'fs/promises';
import { fileURLToPath } from "url";
import { join } from 'path';
import FileSystemError from '../utils/FileSystemError.js';
import { existFile } from '../utils/existFile.js';
const sourceUrl = new URL('files', import.meta.url);
const destinationUrl = new URL('files_copy', import.meta.url);
const sourcePath = fileURLToPath(sourceUrl);
const destinationPath = fileURLToPath(destinationUrl);

export const copy = async (src, dest) => {
  try {
    const existsSource = await existFile(src);
    const existsDestination = await existFile(dest);
    if (existsSource && !existsDestination) {
      await mkdir(dest);
      const files = await readdir(src, { withFileTypes: true })
        .then(files => files)
        .catch(err => { throw err; });
      files.forEach(file => {
        if (file.isDirectory()) {
          copy(join(src, file.name), join(dest, file.name));
        } else if (file.isFile()) {
          copyFile(join(src, file.name), join(dest, file.name));
        }
      });
    } else {
      if (!existsSource) {
        throw new FileSystemError('FS operation failed: files folder doesn\'t exists');
      }
      throw new FileSystemError('FS operation failed: files_copy has already been created');
    }
  } catch (error) {
    console.log(error.stack);
    console.log(error.name);
    console.log(error.message);
  }
};

copy(sourcePath, destinationPath);
