import HttpUtils from "../utils/http.util.js";
import endpoints from '../resources/endpoints.json' assert { type: "json" };
import axios from "axios";

axios.defaults.baseURL = endpoints.main_url

class PlaceholderAPI{    
    static async getAllPosts(){                   
        return HttpUtils.sendGet(endpoints.post_path)
    }

    static async getPorstById(id){
        return HttpUtils.sendGet(endpoints.post_path + id)
    }

    static async createPost(post){
        return HttpUtils.sendPost(endpoints.post_path, post)
    }

    static async getAllUsers(){
        return HttpUtils.sendGet(endpoints.user_path)
    }

    static async getUserById(id){
        return HttpUtils.sendGet(endpoints.user_path + id)
    }
}

export default PlaceholderAPI;