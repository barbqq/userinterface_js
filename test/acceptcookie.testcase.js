import HomePage from '../pages/home.page.js';
import LoginPage from '../pages/login.page.js';
import expect from 'chai';

describe("Accept cookies", async function(){
    it("Navigate to home page", async ()=>{        
        await browser.url("/");
        await browser.maximizeWindow();                                      
        expect.assert.equal(true,await HomePage.isPageOpened(),"Main page should be opened");                
    });
    it("Click the link to navigate to next page", async () => {
        await HomePage.clickGameLinkBtn();                    
        expect.assert.equal(true,await LoginPage.isPageOpened(),"Login page should be opened");
    });
    it("Hide accept cookie banner", async ()=>{        
        await LoginPage.clickAcceptCookiesBtn();
        expect.assert.isUndefined(await LoginPage.isCookiesFormPresent(),"Cookies form should be closed");
    });
})