const puppeteer = require('puppeteer');

let kslUrl = 'https://cars.ksl.com/';
(async () => {
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926});
  await page.goto(kslUrl);

  // get car details
  let carData = await page.evaluate(() => {
    let cars = [];
    // get car elements
    let carsElms = document.querySelectorAll('div.listing[data-listing]');
    // get car data
    carsElms.forEach((carelement) => {
      let carJson = {};
      try {
        carJson.name = carelement.querySelector('a.link').innerText;
        carJson.price = carelement.querySelector('div.listing-detail-line.price').innerText;
        carJson.mileage = carelement.querySelector('div.listing-detail-line.mileage').innerText;
      }
    catch (exception){

    }
    cars.push(carJson);
  });
  return cars;
});

console.dir(carData);
})();
