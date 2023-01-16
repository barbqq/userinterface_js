import axios from "axios";
import expect from 'chai';
import testData from '../resources/test_data.json' assert { type: "json" };
import CommonUtils from "../utils/common.utils.js";
import testPost from '../resources/test_post.json' assert { type: "json" };
import testPostTwo from '../resources/test_post_2.json' assert { type: "json" };
import testUser from '../resources/test_user.json' assert { type: "json" };
import StatusCodes from 'http-status-codes';
import Assertions from '../../src/utils/assertions.utils.js'

axios.defaults.baseURL = testData.main_url

class APISteps{
    
    static async getPostsStep(){
        CommonUtils.addLog("Get all posts step")
        await axios.get(testData.post_path)
        .then(response => {
            Assertions.toEqual(response.status,StatusCodes.OK)            
            Assertions.toEqual(testData.content_type,response.headers.getContentType())            
            Assertions.toEqual(true, CommonUtils.checkIfPostsSorted(response.data))            
        })
        .catch(error => {
            CommonUtils.addLog("Error: " + error)
        })        
        
    }

    static async getSpecificPostStep(){
        CommonUtils.addLog("Get specific post step")
        await axios.get(testData.post_path + testData.post_id)
        .then(response => {
            Assertions.toEqual(response.status,StatusCodes.OK)
            Assertions.toDeepEqual(testPost,response.data)
        })
        .catch(error => {
            CommonUtils.addLog("Error: " + error)            
        }) 
               
    }

    static async getEmptyPostStep(){
        CommonUtils.addLog("Get empty post step")
        await axios.get(testData.post_path + testData.empty_post)
        .catch(function(error){
            Assertions.toEqual(error.response.status,StatusCodes.NOT_FOUND)
            Assertions.toDeepEqual(error.response.data,JSON.parse(testData.empty_response))                        
        })
        
    }

    static async createPostStep(){
        CommonUtils.addLog("Create post step")
        await axios.post(testData.post_path,testPostTwo)
        .then(response=> {
            Assertions.toEqual(response.status,StatusCodes.CREATED);
            Assertions.toDeepEqual(testPostTwo,response.data);
        })
        .catch(error=> {
            CommonUtils.addLog("Error: " + error)
        })
        

    }

    static async getUsersStep(){
        CommonUtils.addLog("Get user step")
        await axios.get(testData.user_path)
        .then(response => {
            Assertions.toEqual(response.status,StatusCodes.OK)
            Assertions.toEqual(testData.content_type,response.headers.getContentType())
            Assertions.toDeepEqual(testUser,response.data[testUser.id-1]) 
        })
        .catch(error => {
            CommonUtils.addLog("Error: " + error)
        })
        
    }

    static async getSpecificUserStep(){
        CommonUtils.addLog("Get specific user step")
        await axios.get(testData.user_path + testData.user_id_to_compare)
        .then(response => {
            Assertions.toEqual(response.status,StatusCodes.OK)
            Assertions.toEqual(testData.content_type,response.headers.getContentType())
            Assertions.toDeepEqual(testUser,response.data)
        })
        .catch(error => {
            CommonUtils.addLog("Error: " + error)
        })
        
    }
}

export default APISteps;