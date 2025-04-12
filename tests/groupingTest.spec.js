const {
    test,
    expect
} = require('@playwright/test');

test.describe("Smoke Test", () => {

    test("First Test", async ({
        page
    }) => {
        //Write testing code here
        await page.goto("https://playwright.dev");
        await page.pause();
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');

    })

    test.skip("Second test - click test", async ({
        page
    }) => {
        await page.goto("https://the-internet.herokuapp.com");
        await page.pause();
        await page.locator("text=Add/Remove Elements").click();
        await page.locator("text=Add Element").click();
    })

    test("Thrid test", async ({
        page
    }) => {
        await page.goto("https://the-internet.herokuapp.com");
        const Element = page.locator('text=Add/Remove Elements');
        const addElement = page.locator('text=Add Element');
        await Element.click();
        await addElement.click();
    })

})