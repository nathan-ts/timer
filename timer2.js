// const timers = process.argv.slice(2);

// const setAlarm = function (timers) {
//   for (let timer of timers) {
//     if (Number.isInteger(parseInt(timer)) && timer >= 0) {
//       setTimeout(() => { process.stdout.write('\x07.'); }, timer * 1000); 
//     }
//   }
// };

// setAlarm(timers);

const rl = require('readline');
rl.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.stdout.write(`thanks for using me, さよなら!\n`);
    process.exit();
  } 
  // console.log(`You pressed the "${str}" key`);
  // console.log();
  // console.log(key);
  // console.log();
  if (key.name === 'b') process.stdout.write('\x07');
  else if (key.name >= '1' && key.name <= '9') {
    process.stdout.write(`setting timer for ${key.name} seconds...\n`);
    setTimeout(() => { process.stdout.write('\x07'); }, parseInt(key.name) * 1000);
  }
});