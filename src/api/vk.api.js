import apiData from '../resources/vk.endpoints.json' assert { type: "json" };
import HttpUtils from '../utils/http.utils.js';
import axios from 'axios';
import CommonUtils from '../utils/common.utils.js';
import fs from 'fs'
import path from "path";
import FormData from "form-data";

axios.defaults.baseURL = apiData.vk_api_url

class VKApiUtils{ 

    static async createTextMessageWall(text){
        CommonUtils.addLog("Creating post API nethod")
        let params = VKApiUtils.commonParams();
        params.message = text;
        return HttpUtils.sendPost(apiData.create_post_path,null,params)
    }

    static async addComment(text,postId){
        CommonUtils.addLog("Adding comment to post API method")
        let params = VKApiUtils.commonParams();
        params.post_id = postId;
        params.message = text;
        return HttpUtils.sendPost(apiData.create_comment_path,null,params)
    }

    static async checkLikes(owner,type,id){
        CommonUtils.addLog("Checking like API method")
        let params = VKApiUtils.commonParams();
        params.user_id = owner;
        params.type = type;
        params.item_id = id;
        return HttpUtils.sendPost(apiData.check_likes_path,null,params)
    }

    static async deletePost(id){
        CommonUtils.addLog("Deleting post API method")
        let params = VKApiUtils.commonParams();
        params.post_id = id;
        return HttpUtils.sendPost(apiData.delete_post_path,null,params)
    }

    static async getWallPhotoUploadServer(){
        CommonUtils.addLog("Geting wall upload server link")
        let params = VKApiUtils.commonParams();
        const response = await HttpUtils.sendPost(apiData.vk_api_url + apiData.get_wall_upload_path,null,params)
        return response.data
    }

    static async uploadWallPhoto(filePath){
        CommonUtils.addLog("Uploading photo")               
        let bs2 = fs.createReadStream(path.resolve(filePath))
        let formData = new FormData();              
        formData.append(apiData.type_of_upload_file,bs2)                
        let path1 = await this.getWallPhotoUploadServer()
        let url = path1.response.upload_url       
        const resp = await HttpUtils.upload(url,formData)
        return resp.data;
    }

    static async saveUploadWallPhoto(uploadedPhoto){
        CommonUtils.addLog("Saving uploaded photo")
        let params = VKApiUtils.commonParams();
        params.photo = uploadedPhoto.photo;
        params.server = uploadedPhoto.server;
        params.hash = uploadedPhoto.hash;
        const resp = await HttpUtils.sendPost(apiData.save_wall_photo_path,null,params)
        console.log(resp.data.response[0].id)        
        return resp.data;
    }

    static async updateWallPost(text, photoId, postId){
        CommonUtils.addLog("Updating post")
        let params = VKApiUtils.commonParams();
        params.post_id = postId;
        params.message = text;
        params.attachments = "photo" + apiData.owner_id + "_" + photoId
        const resp = await HttpUtils.sendPost(apiData.edit_wall_post_path,null,params)
        console.log(resp.data)
        const a = 4;
        return resp.data;
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