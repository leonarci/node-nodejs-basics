//TODO import { Readable } from 'stream' and think about creating 
//custom Readable Stream
import { createReadStream } from 'fs';

export const read = async () => {
    const fileUrl = new URL('files/fileToRead.txt', import.meta.url);
    const readable = createReadStream(fileUrl);
    readable.on('data', data => process.stdout.write(data));
};

read();
