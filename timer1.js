// use process.argv to get user input. ie: timer1.js 5 10 15 20 where the numbers will be how many secs for every beep
const alarmTimer = process.argv.slice(2);
alarmTimer
  .sort((a,b) => a - b)
  .forEach(i => {
  if (typeof Number(i) === 'number' && i > 0) {
    setTimeout(() => process.stdout.write('\x07'), i * 1000);
  }
});