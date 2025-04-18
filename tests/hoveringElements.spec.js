const {test, expect} = require('@playwright/test');

test.describe("Example Test", ()=>{
    test("Example", async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/hovers');
        await page.hover('(//img[@alt="User Avatar"])[1]');
        await expect(page.locator('text=name: user1')).toBeVisible;
        await page.locator('(//a[contains(text(),"View profile")])[1]').click();

        await expect(page.locator('(//h1[normalize-space()="Not Found"])[1]')).toBeVisible;
        await page.pause();

    })

})