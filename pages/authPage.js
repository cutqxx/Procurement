const { expect } = require('@playwright/test');

exports.authPage = class authPage {

/**
 * @param {import('@playwright/test').Page} page
 */
constructor(page,context,browser) {
this.browser = browser;
this.page = page;
this.context = context;
this.LOGIN_INPUT = "input.mdc-text-field__input";
this.PASSWORD_INPUT = 'input.mdc-text-field__input[type="password"]';
this.BUTTON_AUTH = page.locator("button.mdc-button.mdc-button--raised");
this.TITLE_NAME = "head title";
}

async new_context(){
    await this.browser.newContext({ storageState: 'authState.json' });
}

async goto() {
await this.page.goto('https://dev.procurement.pragma.info/projects');
}

async insert_login() {
await this.page.fill(this.LOGIN_INPUT, "cutqxx@gmail.com")
}

async insert_password(){
    await this.page.fill(this.PASSWORD_INPUT, "cutqxx998")
}

async auth_button_click(){
    await this.BUTTON_AUTH.click()
}

async check_project_page(){
    await this.page.innerText(this.TITLE_NAME) == "Проекты"
}

async auth_admin(){
    if (await this.page.innerText(this.TITLE_NAME) == "Вход"){
        await this.insert_login()
        await this.insert_password()
        await this.auth_button_click()
    }
    else if (await this.page.locator(this.TITLE_NAME) == "Проекты"){
        console.log("Вы уже авторизованы!")
    }
}

}