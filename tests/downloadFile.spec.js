const {test, expect} = require('@playwright/test');

test.describe("Example Test", ()=>{
    test("Example", async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download');

    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent('download');
    await page.getByText('dummy.pdf').click();
    const download = await downloadPromise;
    
    const path = await download.path();
    const url = download.url();
    
    console.log(path);
    console.log(url);


    // Wait for the download process to complete and save the downloaded file somewhere.
    await download.saveAs('saveDownload/download' + download.suggestedFilename());
    await page.pause();
    })
})
