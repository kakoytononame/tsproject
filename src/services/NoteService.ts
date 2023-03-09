import { INoteDTO } from "../interfaces/dto/INoteDTO"
import { api } from "./api"

interface INoteService{
    getNotesByUser:() => Promise<INoteDTO[]>
    
}
const getNotesByUser = async ():Promise<INoteDTO[]> => {
    const response = await api.get<INoteDTO[]>("/notes/getnotes/{notepadname}");

    return response.data;
}
export const NoteService:INoteService = {
    getNotesByUser
}