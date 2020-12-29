const uas = require('../src/useragent.json')
require('dotenv').config()

module.exports = {
  userAgent: uas[Math.floor(Math.random() * uas.length)],
  local: process.env.ENV === 'local',
  args: ['--lang=ja'].concat(this.local ? ['--single-process'] : []),
  viewport: {
    width: Number(process.env.WIDTH),
    height: Number(process.env.HEIGHT)
  }
}
