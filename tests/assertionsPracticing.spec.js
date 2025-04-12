const {test, expect} = require('@playwright/test');

test.describe("Example", ()=>{
    test("Testing LocatorId", async ({page}) =>{
    
    await page.goto("https://demoqa.com/text-box");
    await page.locator('[placeholder ="Full Name"]').fill("Test userName");
    await page.locator('#userEmail').fill("TestEmail@gmail.com");
    await page.locator('#currentAddress').fill("This is the current Address");
    await page.locator('#permanentAddress').fill("This is a Permanent Address");
    await page.locator('button:has-text("Submit")').click();

    await page.pause();
    const name = page.locator('#name');
    const email = page.locator('#email');
    const currentAddress = page.locator('p#currentAddress');
    const permanentAddress = page.locator('p#permanentAddress');

    await expect(page).toHaveTitle("DEMOQA");
    await expect(page).toHaveURL("https://demoqa.com/text-box");
    await expect(name).toBeVisible();
    await expect(name).toHaveText("Name:Test userName");
    await expect(email).toBeVisible();
    await expect(email).toHaveText("Email:TestEmail@gmail.com");
    await expect(currentAddress).toBeVisible();
    await expect(currentAddress).toContainText("Current Address :This is the current Address");
    await expect(permanentAddress).toBeVisible();
    await expect(permanentAddress).toHaveText("Permananet Address :This is a Permanent Address");
    

    })

})