const homePage = require('../pages/home.page.js')
const assertChai = require('chai').assert;
describe("All card are opened", async function(){
    it("Navigate to home page", async()=>{
        await browser.url("/");
        await browser.maximizeWindow();        
        assertChai.equal(true,await homePage.isPageOpened(),"Main page should be opened");
    });
})