import LoginPage from '../pages/login.page.js';
import expect from 'chai';

class AcceptCookieSteps{
    static async acceptCookies(){
        await LoginPage.clickAcceptCookiesBtn();
        expect.assert.isUndefined(await LoginPage.isCookiesFormPresent(),"Cookies form should be closed");
    }
}

export default AcceptCookieSteps;