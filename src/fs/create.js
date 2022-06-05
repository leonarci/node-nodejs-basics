import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import FileSystemError from '../utils/FileSystemError.js';
import { existFile } from '../utils/existFile.js';

const filePath = fileURLToPath(new URL('files/fresh.txt', import.meta.url));

export const create = async () => {
  try {
    const exists = await existFile(filePath);
    if (exists) {
      throw new FileSystemError();
    } else {
      writeFile(filePath, 'I am fresh and young');
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

  // try {
  //   await writeFile(filePath, 'I am fresh and young', { flag: 'wx' })
  //     .catch(() => { throw new FileSystemError(); });
  // } catch (error) {
  //   console.log(error.name);
  //   console.log(error.message);
  // }
};

create();
