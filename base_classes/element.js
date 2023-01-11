export default class Element {
    constructor(name,elementLocator){
        this.name = name;
        this.elementLocator = elementLocator;
    }

    get getElement(){ return $(this.elementLocator)}

    get getElements(){ return $$(this.elementLocator)}

    async click(){        
        console.log(`Clicking ${this.name}`);
        let element = await this.getElement;
        await element.waitForDisplayed();
        await element.click();        
    }

    async getText(){
        console.log(`Getting text from ${this.name}`);
        let element = await this.getElement;
        await element.waitForDisplayed();
        return element.getText();
    }

    async sendText(value){
        console.log(`Sending text ${value} to ${this.name}`);
        let element = await this.getElement;
        await element.waitForDisplayed();
        await element.clearValue();
        await element.setValue(value);
    }

    async isElementPresent(){
        console.log(`Checking presens of ${this.name}`);
        let element = await this.getElement;
        return await element.waitForDisplayed();        
    }

    async isExisting(){
        let element = await this.getElement;
        return await element.isExisting(); 
    }
}

