# puppeteer-github

> [GitHub](https://github.com) automation driven by headless chrome.

[![NPM](https://img.shields.io/npm/v/puppeteer-github.svg)](https://www.npmjs.com/package/puppeteer-github) [![Build Status](https://travis-ci.com/transitive-bullshit/puppeteer-github.svg?branch=master)](https://travis-ci.com/transitive-bullshit/puppeteer-github) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This module also has a [CLI](https://github.com/transitive-bullshit/puppeteer-github-cli).

## Install

```bash
npm install --save puppeteer-github
```

## Usage

This example signs into a [GitHub](https://github.com) account.

```js
const PuppeteerGitHub = require('puppeteer-github')

const github = new PuppeteerGitHub()

await github.signin({ username: 'xxx', password: 'xxx' })
await github.starRepo('facebook/react')

await github.close()
```
And extracts usernames and emails to local database (MongoDB)
## Related

-   [puppeteer-github-cli](https://github.com/transitive-bullshit/puppeteer-github-cli) - CLI for this module.
-   [puppeteer-email](https://github.com/transitive-bullshit/puppeteer-email) - Email automation driven by headless chrome.
-   [puppeteer](https://github.com/GoogleChrome/puppeteer) - Headless Chrome Node API.
-   [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer) - Curated list of awesome puppeteer resources.
