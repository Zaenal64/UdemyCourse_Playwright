const {test, expect} = require('@playwright/test');

test.describe("Example", ()=>{
    test("Testing LocatorId", async ({page}) =>{
    
    await page.goto("https://demoqa.com/text-box");
    await page.locator('[placeholder ="Full Name"]').fill("Test userName");
    await page.locator('#userEmail').fill("TestEmail@gmail.com");
    await page.locator('#currentAddress').fill("This is the current Address");
    await page.locator('#permanentAddress').fill("This is a Permanent Address");
    await page.locator('button:has-text("Submit")').click();

    })

})