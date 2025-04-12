const {test,expect} = require('@playwright/test');


test("First Test", async ({page})=>{
    //Write testing code here
    await page.goto("https://playwright.dev");
    await page.pause();
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');

})


//Windows10
/*
test("Second test - click test", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com");
    await page.pause();
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
})
*/



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

/*
//Experiment1
test.only("Simple click test", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com");
    const Element = page.locator('text=Add/Remove Elements');
    const addElement = page.locator('text=Add Element');
    await page.screenshot({path: "screenshot.png"});
    await Element.click();
    await addElement.click();
})
*/

/*
//Experiment2 add fullpage
test.only("Simple click test", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com");
    const Element = page.locator('text=Add/Remove Elements');
    const addElement = page.locator('text=Add Element');
    await page.screenshot({path: "screenshot1.png", fullpage: true});
    await Element.click();
    await addElement.click();
})
*/

/*
//Experiment3 Extreame case, only focus on what the user does
test.only("Simple click test", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com");
    const Element = page.locator('text=Add/Remove Elements');
    const addElement = page.locator('text=Add Element');
    const locator1 = page.locator('text=Add/Remove Elements');
    await locator1.screenshot({path: "screenshot2.png"});
    await Element.click();
    await addElement.click();
})
*/

