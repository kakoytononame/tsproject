import axios from "axios";
import { IDirectoryDTO } from "../interfaces/dto/IDirectoryDTO"
import { api } from "./api"

interface IDirectoryService{
    getDirectorysByUser:() => Promise<IDirectoryDTO[]>
    
}
const getDirectorysByUser = async ():Promise<IDirectoryDTO[]> => {
    const response = await api.get<IDirectoryDTO[]>("/directorys/getdirectorys");

    return response.data;
}
export const DirectoryService:IDirectoryService = {
    getDirectorysByUser
}