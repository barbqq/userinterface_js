import axios from "axios";
import testData from '../resources/test_data.json' assert { type: "json" };

axios.defaults.baseURL = testData.main_url

class HttpUtils {
    static async getEntity(id, path){
        return await axios.get(testData.post_path + id)
    }

    static async getEntities(path){
        return await axios.get(testData.post_path)
    }

    static async postEntity(data, path){
        return await axios.post(path,data)
    }

}

export default HttpUtils;