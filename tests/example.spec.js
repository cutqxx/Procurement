// @ts-check
const { test, expect } = require('@playwright/test');
const { authPage } = require('../pages/authPage.js');

test('Auth', async ({ page }) => {
  const auth = new authPage(page);
  console.log("Авторизация админа")
  await auth.goto();
  await auth.auth_admin();
  await auth.check_project_page();
  // --- save storaState:
  await page.context().storageState({ path: 'authState.json' });
});

test("auth_2", async ({ browser }) => {
  const context = await browser.newContext({
    storageState:
      "authState.json",
  });
  const page = await context.newPage();
  const auth = new authPage(page);
  await auth.goto()
  await auth.auth_admin();


});
