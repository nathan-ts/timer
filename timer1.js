const timers = process.argv.slice(2);

const setAlarm = function (timers) {
  for (let timer of timers) {
    if (Number.isInteger(parseInt(timer)) && timer >= 0) {
      setTimeout(() => { process.stdout.write('\x07.'); }, timer * 1000); 
    }
  }
};

setAlarm(timers);