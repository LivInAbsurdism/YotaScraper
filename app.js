const puppeteer = require('puppeteer');

let kslUrl = 'https://cars.ksl.com/';
(async () =>{
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926});
  await page.goto(kslUrl);
}
  )
