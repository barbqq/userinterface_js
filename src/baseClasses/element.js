import report from '@wdio/allure-reporter';

export default class Element {
    constructor(name,elementLocator){
        this.name = name;
        this.elementLocator = elementLocator;
    }

    get getElement(){ return $(this.elementLocator)}

    get getElements(){ return $$(this.elementLocator)}

    async click(){   
        report.addStep(`Clicking ${this.name}`);     
        let element = await this.getElement;
        await element.waitForDisplayed();
        await element.click();        
    }

    async getText(){
        report.addStep(`Getting text from ${this.name}`);        
        let element = await this.getElement;
        await element.waitForDisplayed();
        return element.getText();
    }

    async sendText(value){
        report.addStep(`Sending text ${value} to ${this.name}`);        
        let element = await this.getElement;
        await element.waitForDisplayed();
        await element.clearValue();
        await element.setValue(value);
    }

    async isElementPresent(){
        report.addStep(`Checking presens of ${this.name}`);        
        let element = await this.getElement;        
        await element.waitForDisplayed();
        return element.isDisplayed();
              
    }

    async isExisting(){
        report.addStep(`Checking ${this.name} existence`);
        let element = await this.getElement;
        return element.isExisting(); 
    }

    async getAttribute(value){
        report.addStep(`Getting ${this.name} attribute ${value}`);
        let element = await this.getElement;
        return element.getAttribute(value);
    }
}