const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        devtools: false,
        timeout: 20000,
    });

    const page = await browser.newPage();
    await page.goto('http://www.baidu.com/');
    const title = await page.title()
    console.log(title);
    await page.type('input[id="kw"]', 'puppeteer');
    await page.click('input[id="su"]');
    await page.waitFor(2000);
    await page.waitForSelector('div[class="result c-container "]');
    const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('div[class="result c-container "]'));
    });
    console.log(links.length);
    await page.waitFor(2000);
    await page.$eval('input[id="kw"]', input => input.value = '');
    await page.click('input[id="su"]');
    await page.waitFor(2000);


})();