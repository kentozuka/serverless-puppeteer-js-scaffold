const { now, second } = require('./time')
const { commad } = require('./number')

module.exports.log = (text) => {
  const err = typeof text === 'object'
  const txt = `${now} | ${commad(second)}s | ${err ? 'ERROR' : 'INFO'} | ${err ? text.message : text}`
  console.log(txt)
  if (err) console.log(text)
}
