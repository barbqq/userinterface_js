export default class Page {
    
    constructor(name,pageElementLocator) {
            this.name = name;
            this.pageElementLocator = pageElementLocator;
    }

    get pageElement() { return $(this.pageElementLocator)}

    async isPageOpened() {
        console.log(`Checking if ${this.name} is opened`);
        let element = await this.pageElement;                
        await element.waitForDisplayed();
        return element.isDisplayed();
    }

}