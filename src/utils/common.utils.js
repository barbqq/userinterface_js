import report from '@wdio/allure-reporter';

class CommonUtils{
    static addLog(value){
        report.addStep(`STEP: ${value}`);
        console.log(`STEP: ${value}`);
    }
}



export default CommonUtils;