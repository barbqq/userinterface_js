import LoginPage from '../pages/login.page.js';
import expect from 'chai';

class HideHelpFormSteps{
    static async hideHelpForm(){
        await LoginPage.clickHideHelpFormBtn(); 
        expect.assert.equal(true,await LoginPage.isHelpFormHidden(),"Help form should be hidden");
    }
}

export default HideHelpFormSteps;