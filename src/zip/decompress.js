import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { existFile } from '../utils/existFile.js';
import FileSystemError from '../utils/FileSystemError.js';

export const decompress = async () => {
  try {
    const fileUrl = new URL('files/fileToCompress.txt', import.meta.url);
    const archiveUrl = new URL('files/archive.gz', import.meta.url);
    const archiveExist = await existFile(archiveUrl);
    if (!archiveExist) throw new FileSystemError('FS operation failed: archive.gz doesn\'t exist');

    const unzip = createGunzip();
    const src = createReadStream(archiveUrl);
    const dest = createWriteStream(fileUrl);

    pipeline(src, unzip, dest,
      (err) => {
        if (err) console.log('pipeline failed');
      });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
};

decompress();
