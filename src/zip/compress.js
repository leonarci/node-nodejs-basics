import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { existFile } from '../utils/existFile.js';
import FileSystemError from '../utils/FileSystemError.js';


export const compress = async () => {
  try {
    const fileUrl = new URL('files/fileToCompress.txt', import.meta.url);
    const fileExist = await existFile(fileUrl);
    const archiveUrl = new URL('files/archive.gz', import.meta.url);
    const archiveExist = await existFile(archiveUrl);
    if (!fileExist) throw new FileSystemError('FS operation failed: fileToCompress.txt doesn\'t exist');
    if (archiveExist) throw new FileSystemError('FS operation failed: archive.gz already created');

    const gzip = createGzip();
    const src = createReadStream(fileUrl);
    const dest = createWriteStream(archiveUrl);
    pipeline(src, gzip, dest, (err) => {
      if (err) console.log('pipeline failed');
    });

  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
};

compress();
