import { Worker } from 'worker_threads';
import { cpus } from 'os';
const cpuNum = cpus().length;
const fileUrl = new URL('worker.js', import.meta.url);

export const performCalculations = async () => {
  try {
    const promises = [];
    for (let i = 0; i < cpuNum; i++) {
      let promise = new Promise((res, rej) => {
        let y;
        if (process.argv.includes('--err')) {
          y = i === 3 ? 'test' : 10 + i;
        } else {
          y = 10 + i;
        }
        let showWorkers;
        if (process.argv.includes('--workers')) {
          showWorkers = true;
        } else {
          showWorkers = false;
        }
        const worker = new Worker(fileUrl, {
          workerData: {
            num: y,
            showWorkers: showWorkers,
          }
        });
        worker.on('message', (data) => {
          res({ status: 'resolved', data: data });
        });
        worker.on('error', () => {
          rej({ status: 'error', data: null });
        });
      });
      promises.push(promise);
    };

    return (await Promise.allSettled(promises))
      .map(result => result.value ? result.value : result.reason);
  } catch (error) {
    console.log(error.message);
  }

};

console.log(await performCalculations());
