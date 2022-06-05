//TODO add validation of --key on presence of'--'
export const parseArgs = () => {
  let args = '';
  let i = 2;
  while (i < process.argv.length - 1) {
    if (args.length === 0) {
      if (process.argv[i].startsWith('--')) {
        args += `${process.argv[i].slice(2)} is ${process.argv[i + 1]}`;
        i += 2;
        continue;
      } else {
        i++;
        continue;
      }
    }
    if (process.argv[i].startsWith('--')) {
      args += `, ${process.argv[i].slice(2)} is ${process.argv[i + 1]}`;
      i += 2;
      continue;
    } else {
      i++;
      continue;
    }
  }
  if (args) console.log(args);
};
parseArgs();
