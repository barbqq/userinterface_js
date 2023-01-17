import Page from "../baseClasses/form.js";

class MyProfilePage extends Page{
    constructor(){
        super('My profile page',"//div[contains(@class,'ProfileActions')]")
    }
}

export default new MyProfilePage();