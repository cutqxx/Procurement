const { test, expect } = require("@playwright/test");

test("op", async ({ browser }) => {
  const context = await browser.newContext({
    storageState:"./state.json"
    });
  const page = await context.newPage();

  await page.goto("https://dev.procurement.pragma.info/projects")
});