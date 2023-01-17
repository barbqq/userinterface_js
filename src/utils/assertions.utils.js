import CommonUtils from "../utils/common.utils.js"
import expect from 'chai';

class Assertions{
    static toEqual(actual, expected, errorMessage){
        CommonUtils.addLog(`Assertion: ${actual} eqaul to ${expected}`)
        expect.assert.equal(actual, expected, errorMessage)
    }

    static toDeepEqual(actual, expected){
        CommonUtils.addLog(`Assertion: ${JSON.stringify(actual)} eqaul to ${JSON.stringify(expected)}`)
        expect.assert.deepEqual(actual, expected)
    }
}

export default Assertions;