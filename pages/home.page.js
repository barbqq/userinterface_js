import Page from '../base_classes/page.js';
import Button from '../elements/button.element.js';
class HomePage extends Page{
    gameLinkBtn = new Button("Game Link Button","//a[@class='start__link']")    

    constructor(){
        super('Home page','//button[@class="start__button"]')
    }
    
    async clickGameLinkBtn(){        
        await this.gameLinkBtn.click();        
    }
}

export default new HomePage();