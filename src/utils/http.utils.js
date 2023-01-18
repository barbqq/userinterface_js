import axios from "axios";
import fetch from "node-fetch";
import fs from 'fs'

export default class HttpUtils {   

    static async sendPost(path,config = null,params = null){
        const response = await axios.post(path,config, { params : params} );
        return response        
    }

    static async upload(path,formData){              
        return axios.post(path,formData)
    }

    static async uploadNodeFetch(url,formData){
        console.log(url)
        console.log(formData)
        const uploadResponse = await fetch(url, {
            method: 'POST',
            headers: formData.getHeaders(),                        
            body: formData          
        });
        const responseBody = await uploadResponse.json();
        return {
            status: uploadResponse.status,
            body: responseBody
        }
    }

    static async uploadImage(src,path){
        const response = await fetch(src);
        const buffer = await response.buffer();
        fs.writeFile(path, buffer, () => 
            console.log('finished downloading!'));
    }
}