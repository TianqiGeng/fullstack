class BaiDu {

    constructor(page) {
        this.page = page;
    }

    async getTitle() {
        return this.page.title();
    }

    async search(word) {
        await this.page.type('input[id="kw"]', word);
        await this.page.click('input[id="su"]');
    }

    async getNumber(page) {
        await this.page.waitForSelector('div[class="result c-container "]');
        const links = await this.page.evaluate(() => {
            return Array.from(document.querySelectorAll('div[class="result c-container "]'));
        });
        return links.length;
    }

    async back() {
        await this.page.$eval('input[id="kw"]', input => input.value = '');
        await this.page.click('input[id="su"]');
        await this.page.waitFor(2000);
    }
}

module.exports = BaiDu;