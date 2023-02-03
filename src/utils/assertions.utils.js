import CommonUtils from "../utils/common.utils.js"
import expect from 'chai';

class Assertions{
    static toEqual(actual, expected, errorMessage = null){
        CommonUtils.addLog(`Assertion: ${actual} eqaul to ${expected}`)
        expect.assert.equal(actual, expected, errorMessage)
    }

    static toDeepEqual(actual, expected, errorMessage = null){
        CommonUtils.addLog(`Assertion: ${JSON.stringify(actual)} eqaul to ${JSON.stringify(expected)}`)
        expect.assert.deepEqual(actual, expected, errorMessage)
    }

    static toContain(actual, expected, errorMessage = null){
        CommonUtils.addLog(`Assertion: ${JSON.stringify(actual)} to contain ${JSON.stringify(expected)}`)
        expect.assert.include(actual, expected,errorMessage)
    }
}

export default Assertions;