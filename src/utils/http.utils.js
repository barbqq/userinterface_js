import axios from "axios";
import apiData from '../resources/vk.endpoints.json' assert { type: "json" };

export default class HttpUtils {   

    static async sendPost(path,config = null,params = null){
        const response = await axios.post(path,config, { params : params} );

        return response;
    }

}