import Page from '../base_classes/page.js';
import Button from '../elements/button.element.js';
import CheckBox from '../elements/checkbox.element.js';
import Label from '../elements/label.element.js';
import CommonUtils from '../utils/common.utils.js';
import testData from '../config/test_data.json' assert { type: "json" };

class InterestPage extends Page{
    unselectAllCheckBox = new CheckBox("Unselect all checkbox","//div[@class='avatar-and-interests__interests-list__item']//label[@for='interest_unselectall']//span[@class='checkbox__box']")
    nextButton = new Button("Next button","//div[@class='avatar-and-interests-page__buttons']//button[contains(@class,'button--white')]");
    errorLabel = new Label("Error label","//ul[@class='avatar-and-interests__errors-list']")
    interestCheckBoxes = new CheckBox("Interest checkboxes","//div[@class='avatar-and-interests__interests-list__item']//span[@class='checkbox__box']")
    constructor(){
        super('Interest page',"//div[@class='avatar-and-interests__avatar-box']")
    }

    async clickUnselectAllCheckbox(){
        await this.unselectAllCheckBox.click();
    }

    async selectRandomInterests(){
        let elements = await this.interestCheckBoxes.getElements;
        const randomArray = CommonUtils.randomArray(testData.number_of_interests,elements.length-1)
        for(let i=0;i<randomArray.length;i++){
            await elements[randomArray[i]].click();
        }
    }

    async getErrorMessage(){
        return await this.errorLabel.getText();
    }

    async clickNextButton(){
        await this.nextButton.click();
    }
}

export default new InterestPage();