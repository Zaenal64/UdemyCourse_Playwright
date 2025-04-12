const{test, expect} = require('@playwright/test');


test.describe("Authentication", ()=>{
    test.use({
        storageState: "automationUser.json"
    })

    test.beforeEach(async({page}) =>{
        await page.goto('https://parabank.parasoft.com');
    })

    test.skip("Saving Authentication", async({page})=>{
        await page.goto('https://parabank.parasoft.com');
        await page.locator('input[name="username"]').click();
        await page.locator('input[name="username"]').fill("testAutomation");
        await page.locator('input[name="password"]').click();
        await page.locator('input[name="password"]').fill("admin123");
        await page.locator('text=Log In').click();

        await page.context().storageState({path: 'automationUser.json'});
    })

    test("test_2", async({page})=>{
        await page.locator('text=Transfer Funds').first().click();
    })

    test("test_3", async({page})=>{
        await page.locator('text=Bill Pay').first().click();
    })
    
})