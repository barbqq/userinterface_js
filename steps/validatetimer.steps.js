import LoginPage from '../pages/login.page.js';
import expect from 'chai';
import testData from '../config/test_data.json' assert { type: "json" };

class ValidateTimerSteps{
    static async validateTimer(){
        await LoginPage.clickHideHelpFormBtn(); 
        expect.assert.equal(testData.timer_value,await LoginPage.getTimerValue(),"Timer value should be equal");
    }
}

export default ValidateTimerSteps;