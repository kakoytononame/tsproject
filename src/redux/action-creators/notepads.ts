import { Dispatch } from "react";
import { INotepad } from "../../types/types";
import { notepadnames } from "../../services";
import { NotepadAction, NotepadsActionTypes } from "../types/notepad";
import { NotepadService } from "../../services/NotepadService";

export const setNotepads = (name:string) => {
    return async(dispatch:Dispatch<NotepadAction>)=>{
        dispatch({type:NotepadsActionTypes.FETCH_NOTEPAD});

        try{
                const result = await NotepadService.getNotepadsByUser(name);
                console.log(result);
                dispatch({type:NotepadsActionTypes.FETCH_NOTEPAD_SUCCES,payload:result})
                
        } catch (error) {
            dispatch({type:NotepadsActionTypes.FETCH_NOTEPAD_ERROR,payload:"Произошла ошибка"});
        }
    }
}

export const addNotepad = (notepad:INotepad) => {
    return async(dispatch:Dispatch<NotepadAction>) => {
        dispatch({type:NotepadsActionTypes.ADD_NOTEPAD,payload:notepad});
    }
}