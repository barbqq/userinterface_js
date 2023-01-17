import MainPage from '../pages/main.page.js'
import LoginPage from '../pages/login.page.js'
import NewsPage from '../pages/news.page.js'
import MyProfilePage from '../pages/myprofile.page.js'
import SideBarForm from '../pages/sidebar.form.js'
import Assertions from '../utils/assertions.utils.js';
import testData from '../resources/test.data.json' assert { type: "json" };
import CommonUtils from "../utils/common.utils.js"

class VKSteps{

    static async loginToMyPage(){
        CommonUtils.addLog("Logging to VK page")
        Assertions.toEqual(true,await MainPage.isPageOpened(),"Main page should be opened");
        await MainPage.inputPhone(testData.login);
        await MainPage.clickSignInButton();
        Assertions.toEqual(true,await LoginPage.isPageOpened(),"Login page should be opened");                
        await LoginPage.inputPassword(testData.password)
        await LoginPage.clickContinueBtn();
        Assertions.toEqual(true,await NewsPage.isPageOpened(),"News page should be opened");
        await SideBarForm.clickMyProfileBtn();
        Assertions.toEqual(true,await MyProfilePage.isPageOpened(),"News page should be opened");        
    }

    
}

export default VKSteps;