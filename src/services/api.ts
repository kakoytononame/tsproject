import axios, { AxiosError } from "axios";

export const api = axios.create({
    withCredentials:true,
    baseURL:"http://localhost:80/api"
});

export const api_url:string = "http://localhost:80/wwwroot/";

api.interceptors.response.use((response)=>response,(error:AxiosError)=>{
    if(error.response?.status === 401){
        window.location.href = "/login";
        
    }
})