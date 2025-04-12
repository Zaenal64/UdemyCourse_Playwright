const {test,expect} = require('@playwright/test');


test.describe('Smoke Tests', ()=>{

    test.beforeEach(async({page}) =>{
        await page.goto("/");
    })

    test.afterEach(async({page})=>{
        console.log("This test finished");
    })


    test("Simple click test", async ({page})=>{
        await page.click('text=Add/Remove Elements');
        await page.click('text=Add Element');
    })
    
    test("Simple click test1", async ({page})=>{
        await page.click('text=Drag and Drop');
    })
    
})
