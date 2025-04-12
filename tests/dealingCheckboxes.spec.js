const{test, expect} = require('@playwright/test');

test.describe.parallel("Example Test", ()=>{

    test("Exampe_1", async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/checkboxes");
        await page.locator('//input[@type="checkbox"][1]').check();
        await page.locator('//input[@type="checkbox"][2]').uncheck();
    })
  


})