import Form from "../baseClasses/form.js";
import Button from "../elements/button.element.js";

class SideBarForm extends Form{

    myProfileBtn = new Button("My profile button","//li[@id='l_pr']")

    constructor(){
        super('Side bar form',"//div[@id='side_bar_inner']")
    }

    async clickMyProfileBtn(){
        await this.myProfileBtn.click()
    }
}

export default new SideBarForm();