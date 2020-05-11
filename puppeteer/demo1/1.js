const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: false, timeout: 15000 });
    const page = await browser.newPage();
    await page.goto('https://baidu.com');

    // get width/height
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        };
    });
    console.log('Dimensions:', dimensions);
    // Screenshot
    await page.screenshot({ path: 'doc/baidu.png', clip: { x: 0, y: 0, width: dimensions.width, height: dimensions.height } });

    await browser.close();
})();