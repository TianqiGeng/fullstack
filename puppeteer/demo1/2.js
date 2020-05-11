const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        // 是否运行浏览器无头模式(boolean)
        headless: false,
        // 是否自动打开调试工具(boolean)，若此值为true，headless自动置为fasle
        devtools: false,
        // 设置超时时间(number)，若此值为0，则禁用超时
        timeout: 20000,
    });

    const page = await browser.newPage();

    await page.goto('http://www.scimoney.xyz/');

    await page.waitFor(3000);
    for (let j = 0; j < 10; j++) {
        await page.type('input[id="username"]', 'Tom5555', { delay: 50 });
        await page.type('input[id="password"]', '999999', { delay: 50 });
        await page.click('input[class="logsub"]');
        await page.waitFor(2000);
        await page.click('input[value="START WATCHING PAYED ADS"]');
        await page.waitFor(20000);
        for (let i = 0; i < 150; i++) {
            let num1 = await page.$eval('#cimg1 img', img => img.src);
            let num1n = num1.substring(38, 39);
            let num2 = await page.$eval('#cimg2 img', img => img.src);
            let num2n = num2.substring(38, 39);
            let num3 = await page.$eval('#cimg3 img', img => img.src);
            let num3n = num3.substring(38, 39);
            const money = num1n + num2n + num3n;
            let nummoney = await page.$eval('#moneycount', div => div.outerHTML);
            console.log(j + "---" + i + "=" + num1n + num2n + num3n + "地址" + num1 + "钱" + nummoney);
            await page.type('input[type="text"]', money, { delay: 50 });
            await page.waitFor(1000);
            await page.click('input[value="CONTINUE"]');
            await page.waitFor(2000);
        }
        await page.click('a[href="logout.php"]');
        await page.waitFor(3000);
    }
})();