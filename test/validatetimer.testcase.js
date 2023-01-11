import HomePage from '../pages/home.page.js';
import LoginPage from '../pages/login.page.js';
import expect from 'chai';
import testData from '../config/test_data.json' assert { type: "json" };

describe("Hiding help form", async function(){
    it("Navigate to home page", async ()=>{        
        await browser.url("/");
        await browser.maximizeWindow();                                      
        expect.assert.equal(true,await HomePage.isPageOpened(),"Main page should be opened");                
    });
    it("Click the link to navigate to next page", async () => {
        await HomePage.clickGameLinkBtn();                    
        expect.assert.equal(true,await LoginPage.isPageOpened(),"Login page should be opened");
    });
    it("Checking timer value", async ()=>{        
        await LoginPage.clickHideHelpFormBtn(); 
        expect.assert.equal(testData.timer_value,await LoginPage.getTimerValue(),"Timer value should be equal");                
    });
})