import VKSteps from "../../src/steps/vk.steps.js"

describe("Tests of VK UI and VK API", function () {
    beforeEach(async ()=>{
        await browser.maximizeWindow();
        await browser.url("/");        
    });
    afterEach(async ()=>{
        await browser.reloadSession();
    });
    it("Tests of VK UI and VK API", async function () {
        await VKSteps.loginToMyPage();
    })
})