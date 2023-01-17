import RegisterSteps from '../steps/register.steps.js';
import AcceptCookiesSteps from '../steps/acceptcookies.steps.js';
import HideHelpFormSteps from '../steps/hidehelpform.steps.js';
import ValidateTimerSteps from '../steps/validatetimer.steps.js';
import CommonSteps from '../steps/common.steps.js';


describe("Testing userinterface site", async function(){
    beforeEach(async ()=>{
        await browser.url("/");
        await browser.maximizeWindow();
    });
    afterEach(async ()=>{
        await browser.reloadSession();
    });
    it("Register on userinterface site",async function(){   
        await CommonSteps.navigateToHomePage();
        await CommonSteps.clickGameLinkBtn();     
        await RegisterSteps.inputValidData();
        await RegisterSteps.selectRandomInterest();
    });
    it("Accept cookies",async function(){
        await CommonSteps.navigateToHomePage();
        await CommonSteps.clickGameLinkBtn();
        await AcceptCookiesSteps.acceptCookies();
    });
    it("Hiding help form",async function(){
        await CommonSteps.navigateToHomePage();
        await CommonSteps.clickGameLinkBtn();
        await HideHelpFormSteps.hideHelpForm();
    });
    it("Validate timer",async function(){
        await CommonSteps.navigateToHomePage();
        await CommonSteps.clickGameLinkBtn();
        await ValidateTimerSteps.validateTimer();
    });
})