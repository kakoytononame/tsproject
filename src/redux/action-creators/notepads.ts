import { Dispatch } from "react";
import { INotepad } from "../../types/types";
import { notepadnames } from "../../services";
import { NotepadAction, NotepadsActionTypes } from "../types/notepad";

export const setNotepads = () => {
    return async(dispatch:Dispatch<NotepadAction>)=>{
        dispatch({type:NotepadsActionTypes.FETCH_NOTEPAD});

        try{
            setTimeout(()=>{
                dispatch({type:NotepadsActionTypes.FETCH_NOTEPAD_SUCCES,payload:notepadnames})
            },2000)
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