import apiData from '../resources/vk.endpoints.json' assert { type: "json" };
import HttpUtils from '../utils/http.utils.js';
import axios from 'axios';

axios.defaults.baseURL = apiData.vk_api_url

class VKApiUtils{ 

    static async createTextMessageWall(text){
        let params = VKApiUtils.commonParams();
        params.message = text;
        return HttpUtils.sendPost(apiData.create_post_path,null,params)
    }

    static async addComment(text,postId){
        let params = VKApiUtils.commonParams();
        params.post_id = postId;
        params.message = text;
        return HttpUtils.sendPost(apiData.create_comment_path,null,params)
    }

    static async checkLikes(owner,type,id){
        let params = VKApiUtils.commonParams();
        params.user_id = owner;
        params.type = type;
        params.item_id = id;
        return HttpUtils.sendPost(apiData.check_likes_path,null,params)
    }

    static async deletePost(id){
        let params = VKApiUtils.commonParams();
        params.post_id = postId;
        return HttpUtils.sendPost(apiData.delete_post_path,null,params)
    }


    static commonParams(){
        let params = {
            access_token: apiData.token,
            v: apiData.api_version,
            owner_id: apiData.owner_id
        };
        return params;       
    }
}

export default VKApiUtils;