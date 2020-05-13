const puppeteer = require('puppeteer');
const { expect } = require('chai');
const BaiDu = require('./3.js');


describe('Baidu search', () => {

    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://www.baidu.com/');
    });

    after(async () => {
        await browser.close();
    });

    it('page title', async () => {
        const baiDu = new BaiDu(page);
        expect(await baiDu.getTitle()).to.eql('百度一下，你就知道');
    });

    it('get the list number of results', async () => {
        const baiDu = new BaiDu(page);
        await baiDu.search('puppeteer');
        expect(await baiDu.getNumber()).to.be.greaterThan(0);
    });

    it('back to BaiDu page', async () => {
        const baiDu = new BaiDu(page);
        await baiDu.back();
        expect(await baiDu.getTitle()).to.eql('百度一下，你就知道');
    });

});