import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const calculateHash = async () => {
  const fileUrl = new URL('files/fileToCalculateHashFor.txt', import.meta.url);
  const hash = createHash('sha256');
  const rs = createReadStream(fileUrl);
  let resultStr = '';

  // Two options to choose from
  // pipe directly to process.stdout
  // rs.pipe(hash).setEncoding('hex').pipe(process.stdout);

  // returning result as a string
  const result = await new Promise((res, rej) => {
    rs.on('data', data => {
      hash.update(data);
      resultStr += hash.digest('hex');
    });
    rs.on('error', (err) => rej(err));
    rs.on('end', () => {
      res(resultStr);
    });

  });

  return result;
};

console.log(await calculateHash());
