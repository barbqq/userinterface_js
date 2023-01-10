export default class Page {
    
    constructor(name,page_element) {
            this.name = name;
            this.page_element = page_element;
    }

    isPageOpen() {
        this.page_element.waitForDisplyed();
        return this.page_element.isDisplayed();
    }

}