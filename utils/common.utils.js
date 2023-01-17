import allure from 'allure-commandline'
import testData from '../config/test_data.json' assert { type: "json" };

class CommonUtils{
    static randomArray(length, max) {
        return Array.apply(null, Array(length)).map(function() {
            return Math.round(Math.random() * max);
        });
    }

    static generateEmail(){
        return testData.email + Date.now().toString();
    }

    static generatePassword(){
        return testData.password + Date.now().toString();
    }
}

export default CommonUtils;