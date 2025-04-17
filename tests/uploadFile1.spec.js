const {test, expect} = require('@playwright/test');


test.describe("Example Test", ()=>{
    test("Example", async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/upload');
        await page.setInputFiles('#file-upload', 'uploadedFiles/sample.pdf');
        await page.locator('input:has-text("Upload")').click();

        await expect(page.locator('text=File Uploaded!')).toBeVisible();
        await expect(page.locator('text=sample.pdf')).toBeVisible();


    })
})