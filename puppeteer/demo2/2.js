const puppeteer = require('puppeteer');
const { expect } = require('chai');

describe('Baidu search', () => {
    let browser;
    let page
    before(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://www.baidu.com/');
    });

    after(async () => {
        await browser.close();
    });


    it('page title', async () => {
        expect(await page.title()).to.eql('百度一下，你就知道');
    });

    it('get the list number of results', async () => {
        await page.type('input[id="kw"]', 'puppeteer');
        await page.click('input[id="su"]');
        await page.waitFor(2000);
        await page.waitForSelector('div[class="result c-container "]');
        const links = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('div[class="result c-container "]'));
        });
        expect(links.length).to.be.greaterThan(0);
    });

    it('back to BaiDu page ', async () => {
        await page.waitFor(2000);
        await page.$eval('input[id="kw"]', input => input.value = '');
        await page.click('input[id="su"]');
        await page.waitFor(2000);
        expect(await page.title()).to.eql('百度一下，你就知道');
    });

});