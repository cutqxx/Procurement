const { test, expect } = require("@playwright/test");
const { projectPage } = require('../pages/projectPage.js');
const { sheetPage } = require('../pages/sheetPage.js');

test.describe("smoke @smoke", () => {

  test("test_create_new_project", async ({ browser }) => {
    const context = await browser.newContext({ storageState: "./state.json" });
    const page = await context.newPage();
    // --- main code:

    console.log("Создание нового проекта")
    const project = new projectPage(page);
    await project.goto();
    await project.check_title_projects_page();
    await project.click_to_button_projects_edit();
    await project.click_to_button_add_project();
    await project.create_new_projects();
    await page.waitForTimeout(1000)
    await page.close();

  });
  test("test_add_potreb_in_project @new", async ({ browser }) => {
    const context = await browser.newContext({ storageState: "./state.json" });
    const page = await context.newPage();
    // --- main code:

    console.log("Тест: Загрузка новой потребности в проект")
    const project = new projectPage(page);
    const sheet = new sheetPage(page);
    await project.goto();
    await project.open_project();
    await sheet.add_potrebnost();
    await sheet.check_add_potreb();
    await page.close();
    


  });
});
