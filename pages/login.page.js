import Page from '../base_classes/page.js';
import Button from '../elements/button.element.js';
import TextBox from '../elements/textbox.element.js';
import CheckBox from '../elements/checkbox.element.js';
import Label from '../elements/label.element.js';
import testData from '../config/test_data.json' assert { type: "json" };



class LoginPage extends Page{
    
    inputPassword = new TextBox("Password input",this.setInputLocator(testData.choose_password_loc))

    inputEmail = new TextBox("Email input",this.setInputLocator(testData.your_email_loc))

    inputDomain = new TextBox("Domain input",this.setInputLocator(testData.domain_loc))

    upperDomainDropboxButton = new Button("Upper domain dropdown button","//div[@class='dropdown__opener']");

    upperDomainButton = new Button("Upper domain button","//div[@class='dropdown__list']//div[text()='.com']");

    nextButton = new Button("Next button","//a[@class='button--secondary']");

    acceptCheckBox = new CheckBox("Accept cookies checkbox","//span[@class='checkbox__box']");

    acceptCookiesButton = new Button("Accept cookies button","//div[@class='cookies']//button[contains(@class,'button--transparent')]");
    
    cookiesForm = new Button("Cookies form","//div[@class='cookies']");

    hideHelpFormButton = new Button("Hide help form button","//button[contains(@class,'help-form__send-to-bottom-button')]");

    hiddenHelpForm = new Button("Hidden help form","//div[@class='help-form is-hidden']");

    timer = new Label("Timer","//div[@class='timer timer--white timer--center']");

    constructor(){
        super('Login page','//div[contains(@class,"timer")]')
    }

    setInputLocator(name){
        return `//input[@placeholder='${name}']`;
    }

    async inputData(){
        await this.inputPassword.sendText(testData.password);
        await this.inputEmail.sendText(testData.email);
        await this.inputDomain.sendText(testData.domain);
    }

    async clickUpperDomainDropbox(){
        await this.upperDomainDropboxButton.click();
    }

    async clickUpperDomainButton(){
        await this.upperDomainButton.click();
    }

    async clickAcceptCheckbox(){
        await this.acceptCheckBox.click();
    }

    async clickNextButton(){
        await this.nextButton.click();
    }

    async isCookiesFormPresent(){
        await this.cookiesForm.isExisting();
    }

    async clickAcceptCookiesBtn(){
        await this.acceptCookiesButton.click();
    }

    async clickHideHelpFormBtn(){
        await this.hideHelpFormButton.click();
    }

    async isHelpFormHidden(){
        return this.hiddenHelpForm.isElementPresent();
    }

    async getTimerValue(){
        return this.timer.getText();
    }
}

export default new LoginPage();