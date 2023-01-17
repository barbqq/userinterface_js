import Page from "../baseClasses/form.js";
import Button from "../elements/button.element.js";
import TextBox from "../elements/textbox.element.js";
import testData from '../resources/test.data.json' assert { type: "json" };

class MyProfilePage extends Page{
    constructor(){
        super('My profile page',"//div[contains(@class,'ProfileActions')]")
    }

    async checkPostCreated(text){
        let wallPost = new TextBox("Post text",`//div[contains(text(),'${text}')]`)
        return wallPost.isElementPresent();
    }

    async checkPostExistence(text){
        let wallPost = new TextBox("Post text",`//div[contains(text(),'${text}')]`)
        return wallPost.isElementPresent();
    }

    async getPostAttribute(text){
        let wallPostParent = new TextBox("Post",`//div[contains(text(),'${text}')]//parent::div`)
        return wallPostParent.getAttribute(testData.post_id_attr);
    }    

    async clickShowCommentBtn(text){
        let showCommentBtn = new Button("Show comment button",`//div[contains(text(),'${text}')]//parent::div//parent::div//parent::div//span[@class='js-replies_next_label']`);
        await showCommentBtn.click();
    }

    async clickLikeBtn(text){
        let likeBtn = new Button("Like button",`//div[contains(text(),'${text}')]//parent::div//parent::div//parent::div//div[contains(@class,'PostButtonReactions--post')]`);
        await likeBtn.click();
    }
}

export default new MyProfilePage();