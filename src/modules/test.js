import { unknownObject, createMyServer } from './cjsToEsm.mjs';

createMyServer.listen('8000', () => {
  console.log('server is listening on 8000');
});
console.log(unknownObject);
