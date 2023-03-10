import { INotepadDTO } from "../interfaces/dto/INotepadDTO"
import { api } from "./api"

interface INotepadService{
    getNotepadsByUser:(directoryname:string) => Promise<INotepadDTO[]>
    
}
const getNotepadsByUser = async (directoryname:string):Promise<INotepadDTO[]> => {
    const response = await api.get<INotepadDTO[]>(`/notepads/getnotepads/${directoryname}`);

    return response.data;
}
export const NotepadService:INotepadService = {
    getNotepadsByUser
}