const {test, expect} = require('@playwright/test');

test.describe("Example", ()=>{
    test("Testing LocatorId", async ({page}) =>{
    
    await page.goto("https://demoqa.com/checkbox");
    await page.locator('//span[@class="rct-title" or contains(text(),"Home")]').isVisible;
    await page.locator('//span[@class="rct-checkbox"]').click();
    await page.locator('//span[@class="rct-checkbox"]').isChecked;
    })

})