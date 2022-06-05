import { readFile } from 'fs/promises'
// const path = require('path');
import path from 'path'
// const { release, version } = require('os');
import { release, version } from 'os'
// const { createServer: createServerHttp } = require('http');
import { createServer as createServerHttp } from 'http'
// require('./files/c');
import "./files/c.js";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(
        await readFile(
            new URL('./files/a.json', import.meta.url)
        )
    );
} else {
    unknownObject = JSON.parse(
        await readFile(
            new URL('./files/b.json', import.meta.url)
        )
    );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = process.argv[1];
const __dirname = process.argv[1].slice(0, process.argv[1].lastIndexOf(path.sep))

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer }
