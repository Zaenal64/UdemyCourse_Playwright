const{test, expect} = require('@playwright/test');


test.describe("Authentication", ()=>{
    test.use({
        storageState: "automationUser.json"
    })

    test.beforeEach(async({page}) =>{
        await page.goto('https://parabank.parasoft.com');
    })


    //RUN These to Convert page to pdf
    // npx playwright pdf https://parabank.parasoft.com/parabank/services.htm result.pdf
    // npx playwright pdf --viewport-size="1280,720" https://parabank.parasoft.com/parabank/services.htm result.pdf
    
})