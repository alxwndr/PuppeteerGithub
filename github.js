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