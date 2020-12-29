# serverless-puppeteer-js-scaffold
a scaffold for running puppeteer on lambda

## dependencies
- "@slack/web-api": "^5.14.0",
- "chrome-aws-lambda": "^5.5.0",
- "dotenv": "^8.2.0",
- "puppeteer-core": "^5.5.0"

- puppeteer as dev dependencies (needed to run chromium)

## before running the code
- `npm install`
- `cp .env.example .env`
- you should change serverless.yml also but idduno how


## folder structure
- config: exporting configuration for function using dotenv
- function: where function lives (only accessible from lib)
- helper: global helper functions
- lib: executable function consists of functions from function dir
- src: where source files live eg) userAgent.json
- local: for debugging on local environment