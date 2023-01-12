import HomePage from '../pages/home.page.js';
import LoginPage from '../pages/login.page.js';
import InterestPage from '../pages/interest.page.js';
import expect from 'chai';
import testData from '../config/test_data.json' assert { type: "json" };


class RegisterSteps{    
    static async inputValidData(){
        await LoginPage.inputData();        
        await LoginPage.clickUpperDomainDropbox();
        await LoginPage.clickUpperDomainButton();
        await LoginPage.clickAcceptCheckbox();
        await LoginPage.clickNextButton();                    
        expect.assert.equal(true,await InterestPage.isPageOpened(),"Interest page should be opened");
    }
    static async selectRandomInterest(){
        await InterestPage.clickUnselectAllCheckbox();
        await InterestPage.selectRandomInterests();
        await InterestPage.clickNextButton();                  
        expect.assert.equal(testData.interest_error_message,await InterestPage.getErrorMessage(),"Error message should be equal");
    }
}

export default RegisterSteps;