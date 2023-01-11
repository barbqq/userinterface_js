import HomePage from '../pages/home.page.js';
import LoginPage from '../pages/login.page.js';
import expect from 'chai';

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
    it("Hide help form", async ()=>{        
        await LoginPage.clickHideHelpFormBtn(); 
        expect.assert.equal(true,await LoginPage.isHelpFormHidden(),"Help form should be hidden");                
    });
})