import CommonUtils from "../utils/common.utils.js"
import expect from 'chai';

class Assertions{
    static toEqual(actual, expected){
        CommonUtils.addLog(`Assertion: ${actual} eqaul to ${expected}`)
        expect.assert.equal(actual, expected)
    }

    static toDeepEqual(actual, expected){
        CommonUtils.addLog(`Assertion: ${JSON.stringify(actual)} eqaul to ${JSON.stringify(expected)}`)
        expect.assert.deepEqual(actual, expected)
    }
}

export default Assertions;