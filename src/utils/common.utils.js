import report from '@wdio/allure-reporter';

class CommonUtils{
    static checkIfPostsSorted(objects){
        for(let i = 0; i < objects.length - 1; ++i){            
            if (objects[i].id > objects[i+1].id){
                return false;
            }
        }
        return true;
    }

    static addLog(value){
        report.addStep(`STEP: ${value}`);
        console.log(`STEP: ${value}`);
    }
}



export default CommonUtils;