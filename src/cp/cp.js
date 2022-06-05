import { fork, spawn } from 'child_process';
import { stdout, stdin } from 'process';
const cwd = new URL('./files', import.meta.url);
const file = new URL('./files/script.js', import.meta.url);

export const spawnChildProcess = async (args = []) => {
  if (process.argv.length > 2) {
    process.argv.slice(2).forEach(el => args.push(el));
  }
  args.unshift('script.js');
  stdout.write('Type \'CLOSE\' to exit child process\n');
  stdout.write('Type \'EXIT\' to exit parent process\n');
  let child;
  if (args.includes('--fork')) {
    child = fork(file, args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });
    child.on('spawn', () => {
      stdout.write(`\x1b[31m(master)\x1b[0m fork child with pid: \x1b[34m${child.pid} \x1b[0m \n`);
    });
  } else {
    child = spawn('node', args, {
      cwd: cwd,
      stdio: ['pipe', 'pipe', 'pipe']
    });
    child.on('spawn', () => {
      stdout.write(`\x1b[31m(master)\x1b[0m spawn child with pid: \x1b[34m${child.pid} \x1b[0m \n`);
    });
  }

  stdin.on('data', data => child.stdin.write(data));
  child.stdout.on('data', data => {
    stdout.write(`\x1b[31m(master)\x1b[0m message from \x1b[32m(child)\x1b[34m ${data}\x1b[0m`);
  });
};

stdin.on('data', (data) => {
  if (data.toString().includes('EXIT')) process.exit(0);
  // uncomment line below and comment above to exit both process on "CLOSE"
  // if (data.toString().includes('CLOSE')) process.exit(0);
});

spawnChildProcess(['--propName', 'value', '--prop2Name', 'value2']);
