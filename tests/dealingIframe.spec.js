const {test, expect} = require('@playwright/test');

test.describe("Example Test", ()=>{
    test("Example", async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/iframe');
        const frameTest = page.frameLocator('#mce_0_ifr').locator('html');
        await frameTest.click();
        await frameTest.selectText();
        await frameTest.press('Backspace'); 
        await frameTest.pressSequentially("This is just a test typing into iframe");
    })
})