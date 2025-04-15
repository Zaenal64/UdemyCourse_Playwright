const {test, expect} = require('@playwright/test');

test.describe("Example Test", ()=>{
    test("Examples", async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        await page.dragAndDrop('#column-a', '#column-b');
        await page.dragAndDrop('#column-b', '#column-a');
        

    })


})