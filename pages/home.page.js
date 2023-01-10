class HomePage {
    get mainPageElement() { return $('//button[@class="start__button"]')}

    isPageOpened() {
        this.mainPageElement.waitForDisplyed();
        return this.mainPageElement.isDisplayed();
    }
}

module.exports = new HomePage();