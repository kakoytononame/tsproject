import { INotepadDTO } from "../interfaces/dto/INotepadDTO"
import { api } from "./api"

interface INotepadService{
    getNotepadsByUser:() => Promise<INotepadDTO[]>
    
}
const getNotepadsByUser = async ():Promise<INotepadDTO[]> => {
    const response = await api.get<INotepadDTO[]>("/notepads/getnotepads/{directoryname}");

    return response.data;
}
export const NotepadService:INotepadService = {
    getNotepadsByUser
}