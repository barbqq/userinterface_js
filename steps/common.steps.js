import HomePage from '../pages/home.page.js';
import LoginPage from '../pages/login.page.js';
import InterestPage from '../pages/interest.page.js';
import expect from 'chai';
import testData from '../config/test_data.json' assert { type: "json" };

class CommonSteps{
    static async navigateToHomePage(){                                             
        expect.assert.equal(true,await HomePage.isPageOpened(),"Main page should be opened");
    }
    static async clickGameLinkBtn(){
        await HomePage.clickGameLinkBtn();                    
        expect.assert.equal(true,await LoginPage.isPageOpened(),"Login page should be opened");
    } 
}

export default CommonSteps;