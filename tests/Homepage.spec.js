const{test, expect} = require('@playwright/test');

// Test case for verifying the home page title
test('Home Page Title', async({page})=>{

await page.goto("https://www.demoblaze.com/");

await expect(page).toHaveTitle("STORE");

await page.close();

});