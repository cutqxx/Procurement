const { expect } = require('@playwright/test');

exports.sheetPage = class sheetPage {

/**
 * @param {import('@playwright/test').Page} page
 */
 constructor(page,context,browser) {
    this.browser = browser;
    this.page = page;
    this.context = context;
    this.BUTTON_ADD_POTREBNOST = "div.nav-buttons div.mdc-button__ripple"
    this.UPLOAD_FILES = "div.modal-tooltip input"
    this.NAME_PROJECT = "h4.header-view__title"
    this.BUTTON_VNESTI_IN_FORMA = "text=Внести"
    this.FORMA_PRORABOKTA_POTREBNOSTI = "//html/body/div[2]/div/header/div/section[2]/div/div[2]/button/div"
    this.BUTTON_RASSCHITAT_IN_FORMA = 'button:has-text("Рассчитать")'
    this.CHECK_ADD_POTREBNOST = "div.table-board-td >> nth=0"

    }

    async add_potrebnost() {
        await this.page.click(this.BUTTON_ADD_POTREBNOST)
        await this.page.setInputFiles(this.UPLOAD_FILES, './Example/potreb.xlsx')
        // raw = self.page.locator(SheetPageLocators.CHECK_ADD_POTREBNOST).wait_for()
        await this.page.waitForTimeout(500)
    }
    async check_add_potreb(){
    // let check = await this.page.innerText(this.CHECK_ADD_POTREBNOST)
    await expect(this.page.locator(this.CHECK_ADD_POTREBNOST)).toHaveText('А.3');
    }
}