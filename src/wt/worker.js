import { workerData, parentPort, threadId } from 'worker_threads';

const number = workerData.num;
// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (result) => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.postMessage(result);
};

const result = nthFibonacci(number);
// if --workers arg passed you can see which thread finished earlier
if (workerData.showWorkers) console.log(`result from worker ${threadId} ${result}`);
sendResult(result);
