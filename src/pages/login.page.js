import Page from "../baseClasses/form.js";
import Button from "../elements/button.element.js";
import TextBox from "../elements/textbox.element.js";

class LoginPage extends Page{
    continueBtn = new Button("Continue button","//button[@type='submit']")
    passwordInput = new TextBox("Password input","//input[@name='password']")

    constructor(){
        super('Login page',"//div[@class='vkc__StepInfo__body']")
    }

    async clickContinueBtn(){
        await this.continueBtn.click();
    }    

    async inputPassword(password){
        await this.passwordInput.sendText(password);
    }
}

export default new LoginPage();