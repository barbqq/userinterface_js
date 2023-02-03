import report from '@wdio/allure-reporter';
import HttpUtils from './http.utils.js';
import Jimp from 'jimp';

class CommonUtils{
    static addLog(value){
        report.addStep(`STEP: ${value}`);
        console.log(`STEP: ${value}`);
    }


    static generateRandomString(length){
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';        
        const charactersLength = characters.length;
        let result = "";
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static async createImageFromUrl(url,localPath){
        await HttpUtils.uploadImage(url,localPath)
    }

    static async areEqual(actualPath,expectedPath) {
        const actual = await Jimp.read(actualPath);
        const expected = await Jimp.read(expectedPath);
        const pixelDifference =  Jimp.diff(actual, expected);
        const distance =  Jimp.distance(actual, expected);
        if (distance < 0.20 || pixelDifference < 0.20) {
            return true;
        } else {
            return false;
        }
    }
}



export default CommonUtils;