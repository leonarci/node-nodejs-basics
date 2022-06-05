1. Task: [Task link](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md)
2. Solutions screenshot:
![image](https://user-images.githubusercontent.com/29276703/172063626-3a8e0a0c-d5e7-4658-a4f1-8b9aa03cf478.png)
3. Deploy: please, clone this repo to check the solutions.
4. Done 05.06.2022 / Deadline 05.06.2022
5. Score: 206 / 206

## Scoring: Node.js basics
[link](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/score.md)

You can find same info in **Pull request**
You can use `npm scripts` for _convenience_ or launch command by printing `node <filepath>` in your shell.
**Few words about my realization.** I add `utils` folder to `src` with two modules I wrote and export in next tasks: copy.js, create.js, rename.js, compress.js, decompress.js

![image](https://user-images.githubusercontent.com/29276703/172066900-634c528a-dd5a-4191-ae41-d791caef1eb0.png) 

those modules are existFile.js (check existence of given file) and FileSystemError.js (custom FileSystemError).

![image](https://user-images.githubusercontent.com/29276703/172067012-70fbb2fa-7a45-42bf-8f4b-92e3fde1997a.png)
![image](https://user-images.githubusercontent.com/29276703/172067022-956161df-7051-440f-89ab-20f305da1c80.png)

This custom FileSystemError has default message 'FS operation failed', but I add more information in every case to understand what exactly has happened. In example, `throw new FileSystemError('FS operation failed: properFilename.md already exists');`
I catch these errors and print in console their name and message.
### Basic Scope

- File system (src/fs)
    - [x] **+6** `create.js` implemented properly
          `npm run fs:create` - there is commented realization using 'wx' flag in the file. fell free to check
    - [x] **+10** `copy.js` implemented properly
          `npm run fs:copy` - copies all folder content recursively. add 'test' folder with test file to repo to check this implementation
    - [x] **+10** `rename.js` implemented properly
          `npm run fs:rename`
    - [x] **+6** `delete.js` implemented properly
          `npm run fs:delete`
    - [x] **+6** `list.js` implemented properly
          `npm run fs:list` - prints file names in array. if file has only extension, like '.test', prints filename as it's extension ('.test')

![image](https://user-images.githubusercontent.com/29276703/172065741-fe8c05dd-0083-4e3c-9a4a-cdf63420dde4.png)

          `npm run fs:list:line` - passing --line argument. prints one filename per line.

![image](https://user-images.githubusercontent.com/29276703/172065768-07bc31b2-baf8-410f-a36f-e275552ae695.png)

    - [x] **+6** `read.js` implemented properly
          `npm run fs:read`
- Command line interface(src/cli)
    - [x] **+6** `env.js` implemented properly
          `npm run cli:env`
          in case having some troubles with npm script, please, check with next commands from main repo directory
          `$env:RSS_value1='value1'; $env:RSS_value2='value2'; node ./src/cli/env.js` - for _PowerShell_
          `RSS_name1=value1 RSS_name2=value2 node ./src/cli/env.js` - for _bash_
          or same way as you checked your solution in your shell.
    - [x] **+6** `args.js` implemented properly 
          `npm run cli:args` - `--prop` - every value starting with '--' consider as a prop, the value after it consider as value. argument without '--' and without previous argument in form '--prop' is omitted.
- Modules(src/modules)
    - [x] **+20** `cjsToEsm.cjs` refactored properly
          `npm run modules` - to run cjsToEsm.mjs.
          `npm run modules:test` - to run additional test.js file for more complex check

![image](https://user-images.githubusercontent.com/29276703/172065670-b3feeda0-9978-4798-9022-c3279dab18bd.png)

- Hash (src/hash)
    - [x] **+10** `calcHash.js` implemented properly
          `npm run hash` - commented out solution by piping directly to `stdout`. default is returning string. 

![image](https://user-images.githubusercontent.com/29276703/172066017-370e31fb-8145-49e3-9c08-7e3613161024.png)

- Streams (src/streams)
    - [x] **+10** `read.js` implemented properly
          `npm run streams:read`
    - [x] **+10** `write.js` implemented properly
          `npm run streams:write` - can finish process by typing 'EXIT' in console.
    - [x] **+10** `transform.js` implemented properly
          `npm run streams:transform` - can finish process by typing 'EXIT' in console.
- Zlib (src/zip)
    - [x] **+10** `compress.js` implemented properly
          `npm run zip:compress` - additional check if fileToCompress.txt exists or archive.gz already created
    - [x] **+10** `decompress.js` implemented properly
          `npm run zip:decompress` - additional check if archive.gz exists

### Advanced Scope

- Worker Threads (src/wt)
    - [x] **+10** `worker.js` implemented properly
    - [x] **+30** `main.js` implemented properly
          `npm run wt` - prints result without errors (passing valid values to workers)

![image](https://user-images.githubusercontent.com/29276703/172066245-fad6ac32-8cf8-44f3-b5ff-e43e1fd5f84e.png)

          `npm run wt:err` - prints result without one error to check if requirements about errors are met

![image](https://user-images.githubusercontent.com/29276703/172066306-564b068b-be92-48a9-ab26-f917b6f55698.png)

          `npm run wt:workers` - prints additional info about which worker finished earlier
![image](https://user-images.githubusercontent.com/29276703/172066402-8971a34c-2215-4523-ab35-80f0aedf2e3b.png)

- Child Processes (src/cp)
    - [x] **+10** spawns child process
    - [x] **+10** child process `stdin` receives input from master process `stdin`
    - [x] **+10** child process `stdout` sends data to master process `stdout`
          `npm run cp` - child_process.spawn realization 

![image](https://user-images.githubusercontent.com/29276703/172066461-fbb7889d-7263-4a43-b3f1-1ed54a0a3a76.png)

          `npm run cp:fork` - - child_process.fork realization

![image](https://user-images.githubusercontent.com/29276703/172066489-70f026c1-da12-4959-9ae1-787b3229f8ef.png)

         `args` can be passed directly to function as `spawnChildProcess(['--propName', 'value', '--prop2Name', 'value2']);`
         or can be passed as process.args

![image](https://user-images.githubusercontent.com/29276703/172066777-4fdfba0b-6c44-4899-9f22-145d2973062d.png)

         Type 'CLOSE' to exit child process
         Type 'EXIT' to exit parent process

![image](https://user-images.githubusercontent.com/29276703/172066796-da258427-29ae-413b-9757-89b3b11bfb49.png)

         or

![image](https://user-images.githubusercontent.com/29276703/172066820-23f5a96a-af9d-45ca-992b-174d0b44288f.png)

---
Feel free to contact me in case you have any questions
1. comment this PR
2. telegram: [@leonarci](https://t.me/leonarci)
3. discord: Leon Arci#7731
