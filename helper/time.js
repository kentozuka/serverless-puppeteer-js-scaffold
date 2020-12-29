let timer = process.hrtime()

module.exports = {
  setTimer: () => { timer = process.hrtime() },
  time: process.hrtime(timer),
  second: process.hrtime(timer)[0],
  now: new Date().toISOString()
}
