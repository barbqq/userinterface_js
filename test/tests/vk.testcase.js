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
        await VKSteps.createPostStep();        
        await VKSteps.editPostStep();
        await VKSteps.addCommentStep();        
        await VKSteps.addLikeStep();    
        await VKSteps.deletePostStep();            
    })
})