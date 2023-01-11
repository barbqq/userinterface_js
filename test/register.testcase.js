import HomePage from '../pages/home.page.js';
import LoginPage from '../pages/login.page.js';
import InterestPage from '../pages/interest.page.js';
import expect from 'chai';
import CommonUtils from '../utils/common.utils.js';
import testData from '../config/test_data.json' assert { type: "json" };

describe("Register on userinterface site", async function(){
    it("Navigate to home page", async ()=>{                
        await browser.url("/");
        await browser.maximizeWindow();                                      
        expect.assert.equal(true,await HomePage.isPageOpened(),"Main page should be opened");                
    });
    it("Click the link to navigate to next page", async () => {        
        await HomePage.clickGameLinkBtn();                    
        expect.assert.equal(true,await LoginPage.isPageOpened(),"Login page should be opened");
    });
    it("Input valid data to register form", async () => {
        await LoginPage.inputData();        
        await LoginPage.clickUpperDomainDropbox();
        await LoginPage.clickUpperDomainButton();
        await LoginPage.clickAcceptCheckbox();
        await LoginPage.clickNextButton();                    
        expect.assert.equal(true,await InterestPage.isPageOpened(),"Interest page should be opened");
    });
    it("Selecting random interests", async () => {
        await InterestPage.clickUnselectAllCheckbox();
        await InterestPage.selectRandomInterests();
        await InterestPage.clickNextButton();                  
        expect.assert.equal(testData.interest_error_message,await InterestPage.getErrorMessage(),"Error message should be equal");
    });
})