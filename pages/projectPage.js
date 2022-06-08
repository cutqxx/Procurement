const { expect } = require("@playwright/test");

exports.projectPage = class projectPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page, browser,basePage) {
    this.basePage = basePage
    this.browser = browser;
    this.page = page;
    this.TITLE_NAME = "div.projects-page-title";
    this.BUTTON_EDIT_PROJECTS ="//html/body/div[2]/div/header/div/section[1]/div/button[4]/div";
    this.BUTTON_ADD_PROJECT = "div.projects-page-add-control";
    this.CHECK_COUNT_PROJECT_EDIT_CARD = "div.project-card.mdc-elevation--z3";
    this.COUNT_PROJECT_CARD = "div.project-card.clickable";
    this.BUTTON_ADD_DICTIONARIES = "//html/body/div[1]/div/div/div[1]/div[2]/div[1]/button/div";
    this.ADD_DICT = "input.mdc-checkbox__native-control";
    this.SEARCH_FIELD = "input.mdc-text-field__input";
    this.NAME_NEW_PROJECT = "div#modals span.mdc-text-field__ripple";
    this.CREATE_PROJECT_BUTTON = "div#modals div.mdc-button__ripple >> nth=1";
    this.DELETE_PROJECT_BUTTON = "button:below(span.input-text:has-text('project'))";
  }

  async goto() {
    await this.page.goto("https://dev.procurement.pragma.info/projects");
  }

  async insert_login() {
    await this.page.fill(this.LOGIN_INPUT, "cutqxx@gmail.com");
  }

  async check_title_projects_page() {
    let title = this.page.innerText(this.TITLE_NAME);
    (await title) == "Проекты";
  }

  async click_to_button_add_project() {
    await this.page.click(this.BUTTON_ADD_PROJECT);
  }

  async click_to_button_projects_edit() {
    await this.page.click(this.BUTTON_EDIT_PROJECTS);
  }

  async create_new_projects() {
    await this.page.fill(this.NAME_NEW_PROJECT, "project");
    await this.page.click(this.CREATE_PROJECT_BUTTON);
    await this.page.waitForTimeout(1000);
    let locator = await this.page.locator(this.CHECK_COUNT_PROJECT_EDIT_CARD).count();
    // let count = locator.count();
    let n = locator;
    console.log("номер карточки: " + n)
    // await this.page.innerText(`//div[2]/div/div[2]/div/div/div[2]/div[${n}]/div[2]/span[2]`) == "project";
    await expect(this.page.locator(`//div[2]/div/div[2]/div/div/div[2]/div[${n}]/div[2]/span[2]`)).toHaveText('project');
  }

  async delete_project() {
    await this.page.click(this.DELETE_PROJECT_BUTTON);
    await this.page.waitForTimeout(1000);
  }
  async open_project() {
    await this.page.locator("text=project");
    await this.page.click("text=project");
  }
};
