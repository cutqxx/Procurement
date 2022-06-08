const { expect } = require('@playwright/test');

exports.basePage = class basePage {

/**
 * @param {import('@playwright/test').Page} page
 */
 constructor(page,context,browser) {
    this.browser = browser;
    this.page = page;
    this.context = context;
    this.link = 'https://dev.procurement.pragma.info/projects'
    }


    async goto() {
    await this.page.goto(this.link);
    }

}