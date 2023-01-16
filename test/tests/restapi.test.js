import APISteps from "../../src/steps/api.steps.js"

describe("Testing REST API",async function(){
    it("Testing REST API", async function(){
        await APISteps.getPostsStep();
        await APISteps.getSpecificPostStep();
        await APISteps.getEmptyPostStep();
        await APISteps.createPostStep();
        await APISteps.getUsersStep();
        await APISteps.getSpecificUserStep();
    })
})