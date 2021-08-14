// use process.argv to get user input. ie: timer1.js 5 10 15 20 where the numbers will be how many secs for every beep
const alarmTimer = process.argv.slice(2);
const sortedTimer = alarmTimer.sort((a,b) => a - b);

for (const i of sortedTimer) {
  if (i > 0) {
    setTimeout(() => process.stdout.write('\x07'), i * 1000);
  }
}