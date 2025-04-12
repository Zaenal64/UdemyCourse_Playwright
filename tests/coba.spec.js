const {test, expect} = require('@playwright/test');

test.describe("Example", ()=>{
    test("Testing LocatorId", async ({page}) =>{
  await page.goto('https://demoqa.com/');
  await page.locator('svg').first().click();
  await page.getByText('Check Box').click();
  await page.locator('//span[@class="rct-checkbox"]').click();

});
})