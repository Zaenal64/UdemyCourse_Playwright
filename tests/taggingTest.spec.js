const {test,expect} = require('@playwright/test');


test("First Test @smoke-regression", async ({page})=>{
    //Write testing code here
    await page.goto("https://playwright.dev");
    await page.pause();
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');

})

test("Second test - click test @regression-smoke", async({page, browserName})=>{
    test.skip(browserName === 'firefox', 'Working on the firefox fix');
    await page.goto("https://the-internet.herokuapp.com");
    await page.pause();
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
})

test("Thrid test @smoke", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com");
    const Element = page.locator('text=Add/Remove Elements');
    const addElement = page.locator('text=Add Element');
    await Element.click();
    await addElement.click();
})

test("Fourth test @regression", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com");
    const Element = page.locator('text=Add/Remove Elements');
    const addElement = page.locator('text=Add Element');
    await Element.click();
    await addElement.click();
})



/*
// Add only to execute only these code
test.only("Simple click test", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com");
    const Element = page.locator('text=Add/Remove Elements');
    const addElement = page.locator('text=Add Element');
    await Element.click();
    await addElement.click();
})
*/


