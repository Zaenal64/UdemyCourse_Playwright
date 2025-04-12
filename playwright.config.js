const {playwrightTestConfig} = require('@playwright/test');
import { devices } from '@playwright/test';


const config = {
    retries: 0,
    timeout: 30000,
    reporter: './reporter.js',
    use: {
        baseURL: "https://the-internet.herokuapp.com",
        headless: false, //For open simulation
        viewport: {width: 1200, height: 720},
        video: "on-first-retry",
        screenshot: "only-on-failure",
        trace: "on"
    },

projects: [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        {
          name: 'firefox',   
          use: { ...devices['Desktop Firefox'] }, 
        },
        {
          name: 'webkit',
          use: { ...devices['Desktop Safari']},
        },    
    ]
}

module.exports = config;