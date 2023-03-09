import { INoteDTO } from "../interfaces/dto/INoteDTO"
import { api } from "./api"

interface INoteService{
    getNotesByUser:(name:string) => Promise<INoteDTO[]>
    
}
const getNotesByUser = async (name:string):Promise<INoteDTO[]> => {
    const response = await api.get<INoteDTO[]>(`/notes/getnotes/${name}`);

    return response.data;
}
export const NoteService:INoteService = {
    getNotesByUser
}