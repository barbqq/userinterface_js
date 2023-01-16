import axios from "axios";
import testData from '../resources/test_data.json' assert { type: "json" };
import endpoints from '../resources/endpoints.json' assert { type: "json" }; 

export default class HttpUtils {
    static async sendGet(path){
        return axios.get(path)
    }

    static async sendPost(path){
        return axios.post(path)
    }

}

