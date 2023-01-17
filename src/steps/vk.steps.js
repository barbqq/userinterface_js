import MainPage from '../pages/main.page.js'
import LoginPage from '../pages/login.page.js'
import NewsPage from '../pages/news.page.js'
import MyProfilePage from '../pages/myprofile.page.js'
import SideBarForm from '../pages/sidebar.form.js'
import Assertions from '../utils/assertions.utils.js';
import testData from '../resources/test.data.json' assert { type: "json" };
import apiData from '../resources/vk.endpoints.json' assert { type: "json" };
import CommonUtils from "../utils/common.utils.js"
import VKApiUtils from '../api/vk.api.js'
import StatusCodes from 'http-status-codes';

class VKSteps{
    static post = {};
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

    static async createPostStep(){        
        let randomString = CommonUtils.generateRandomString(testData.random_string_len);
        console.log(randomString);
        VKSteps.post.message = randomString;
        await VKApiUtils.createTextMessageWall(randomString)
        .then( response => {            
            Assertions.toEqual(StatusCodes.OK,response.status,"Status code should be OK");
            VKSteps.post.post_id = response.data.response.post_id;
        });                       
        Assertions.toEqual(true,await MyProfilePage.checkPostCreated(randomString),"Post text should be equal")
        Assertions.toContain(await MyProfilePage.getPostAttribute(randomString),apiData.owner_id,"Post attribute should contain owner id")
    }

    static async addCommentStep(){
        let randomString = CommonUtils.generateRandomString(testData.random_string_len);
        await VKApiUtils.addComment(randomString,VKSteps.post.post_id)
        .then( response => {            
            Assertions.toEqual(StatusCodes.OK,response.status,"Status code should be OK");            
        });
        await MyProfilePage.clickShowCommentBtn();
        Assertions.toContain(await MyProfilePage.getPostAttribute(randomString),apiData.owner_id,"Comment attribute should contain owner id")
    }

    static async addLikeStep(){
        await MyProfilePage.clickLikeBtn(VKSteps.post.message);
        await VKApiUtils.checkLikes(apiData.owner_id,'post',VKSteps.post.post_id)
        .then( response => {            
            Assertions.toEqual(StatusCodes.OK,response.status,"Status code should be OK");
            console.log(response.data)            
        });
    }

    static async deletePostStep(){
        await VKApiUtils.deletePost(VKSteps.post.post_id)
        .then( response => {            
            Assertions.toEqual(StatusCodes.OK,response.status,"Status code should be OK");
            console.log(response.data)            
        });
        Assertions.toEqual(false,await MyProfilePage.checkPostExistence(randomString),"Post should not be displayed");
    }



    
}

export default VKSteps;