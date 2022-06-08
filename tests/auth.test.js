// @ts-check
const { test, expect } = require('@playwright/test');
const { authPage } = require('../pages/authPage.js');

// test('auth', async ({ page }) => {
//   const auth = new authPage(page);
//   console.log("Авторизация админа")
//   // await auth.new_context();
//   await auth.goto();
//   await auth.auth_admin();
//   await auth.check_project_page();
//   // --- save storaState:
//   await page.context().storageState({ path: 'state.json' });
// });

test("auth_2", async ({ browser,page }) => {
  const context = await browser.newContext({
    storageState:"state.json",});

  page = await context.newPage();
  const auth = new authPage(page);
  await auth.goto()
  await auth.auth_admin();
  await page.waitForTimeout(500)
  await page.close();
});
