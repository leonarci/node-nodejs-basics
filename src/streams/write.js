//TODO import { Writable } from 'stream' and think about creating
//custom Writable Stream
import { createWriteStream } from 'fs';

export const write = async () => {
  try {
    const fileUrl = new URL('files/fileToWrite.txt', import.meta.url);
    process.stdout.write('You can use Ctrl + C to Exit or type "EXIT"\n'
      + 'File will be overwriten with every new launch\n');

    const writable = createWriteStream(fileUrl);
    process.stdin.on('data', data => {
      if (data.toString().startsWith('EXIT')) process.exit();
      writable.write(data);
    });
  } catch (error) {
    console.log(error.message);
  }
};

write();
