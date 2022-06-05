import { Transform, pipeline } from 'stream';
import { stdin as input, stdout as output } from 'process';

export const transform = async () => {
  const ts = new Transform({
    transform(chunk, enc, callback) {
      const str = chunk.toString();
      if (str.toString().startsWith('EXIT')) process.exit();
      const data = str.replace(/\r?\n/, '')
        .split('')
        .reverse()
        .join('') + '\n';
      callback(null, data);
    }
  });
  process.stdout.write('You can use Ctrl + C to Exit or type "EXIT"\n'
    + 'Enter your text, it will be reversed and printed out\n');
  pipeline(input, ts, output, (err) => console.error(err.message));
};

transform();
