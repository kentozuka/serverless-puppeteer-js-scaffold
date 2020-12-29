const chromium = require('chrome-aws-lambda')
const config = require('../config/pptr')
const { log } = require('../helper/logger')
const { memoriesInMB } = require('../helper/memory')

let browser
let intentional = false

module.exports.initiate = async () => {
  try {
    const launchOptions = {
      args: chromium.args,
      ignoreDefaultArgs: config.args,
      defaultViewport: config.viewport,
      executablePath: await chromium.executablePath,
      headless: !config.local, // headfull when local
      ignoreHTTPSErrors: true
    }
    
    browser = await chromium.puppeteer.launch(launchOptions)

    // sometimes puppeteer crashes on lambda environment
    browser.on('disconnected', () => {
      if (intentional) return
      for (const [key, value] of Object.entries(memoriesInMB())) {
        log(`MEMORY USAGE | ${key}: ${value}`)
      }
    })

    const page = await this.page()
    return page
  } catch (e) {
    log(e)
  }
}

module.exports.page = async () => {
  try {
    if (!browser) return log('BROWSER UNDEFINED!!')
    const page = await browser.newPage()
    await page.setViewport(config.viewport)
    await page.setUserAgent(config.userAgent)
    return page
  } catch (e) {
    log(e)
  }
}

module.exports.pages = async () => {
  try {
    if (!browser) return 0
    const pages = await browser.pages()
    return pages.length
  } catch (e) {
    log(e)
  }
}

module.exports.terminate = async () => {
  try {
    if (!browser) return log('BROWSER ALREADY CLOSED!!')
    intentional = true
    await browser.close()
  } catch (e) {
    log(e)
  }
}
