const {test, expect} = require('@playwright/test');

test.describe("Example Test", ()=>{
    test("Example", async({page})=>{
        
        await page.goto('https://the-internet.herokuapp.com/key_presses');
        await page.press('#target','F1');
        await page.press('#target', 'Delete');
        await page.press('#target', 'Control');
    })
})