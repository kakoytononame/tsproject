import axios, { AxiosError } from "axios";

export const api = axios.create({
    
    baseURL:"https://localhost:7205/api"
});

export const api_url:string = "https://localhost:7205/wwwroot/";

api.interceptors.response.use((response)=>response,(error:AxiosError)=>{
    if(error.response?.status === 401){
        window.location.href = "/login";
        
    }
})