const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const User = require('./user_model.js');

const URL = 'https://github.com/login';

const github = {
  browser: null,
  page: null,

  initialize: async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();
    await page.goto(URL);
    await page.setViewport({
      width: 1440,
      height: 900
    });
  },

  login: async (login, psw) => {
    //! Récupère login et password et se connecte
    await page.waitForSelector('input[name="login"]');
    await page.type('input[name="login"]', `${login}`, {
      delay: 50
    });
    await page.type('input[name="password"]', `${psw}`, {
      delay: 50
    });
    await page.waitFor(500);
    await page.click('input[name="commit"]');
  },

  search: async (value) => {
    //! Search term from CLI
    await page.waitForSelector('input[aria-label="Search or jump to…"]');
    await page.type('input[aria-label="Search or jump to…"]', `${value}`, {
      delay: 50
    });
    await page.waitForSelector('a[data-target-type="Search"]');
    await page.click('a[data-target-type="Search"]');
   

    //! Click on User
    await page.waitForSelector(`a[href="/search?q=${value}&type=Users"]`);
    await page.click(`a[href="/search?q=${value}&type=Users"]`);
    await page.waitForNavigation({ timeout: 400000 });

    //* new joined
    //#js-pjax-container > div > div.col-12.col-md-9.float-left.px-2.pt-3.pt-md-0.codesearch-results > div > div.d-flex.flex-column.flex-md-row.flex-justify-between.border-bottom.pb-3.position-relative > details > details-menu > div.select-menu-list > a:nth-child(5)



    
  },
