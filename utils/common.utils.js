import allure from 'allure-commandline'

class CommonUtils{
    static randomArray(length, max) {
        return Array.apply(null, Array(length)).map(function() {
            return Math.round(Math.random() * max);
        });
    }
}

export default CommonUtils;