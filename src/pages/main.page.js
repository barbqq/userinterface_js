import Page from "../baseClasses/form.js";
import Button from "../elements/button.element.js";
import TextBox from "../elements/textbox.element.js";

class MainPage extends Page{
    signInBtn = new Button("Sign in button","//button[contains(@class,'VkIdForm__signInButton')]")
    phoneInput = new TextBox("Phone input","//input[@name='login']")

    constructor(){
        super('Main page','//div[@class="VkIdForm__header"]')
    }

    async clickSignInButton(){
        await this.signInBtn.click();
    }

    async inputPhone(login){
        await this.phoneInput.sendText(login);
    }
}

export default new MainPage();