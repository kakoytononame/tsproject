import { Dispatch } from "react";
import { INotepad } from "../../types/types";
import { notenames, notepadnames } from "../../services";
import { NoteAction, NotesActionTypes } from "../types/notes";

export const setNotes = () => {
    return async(dispatch:Dispatch<NoteAction>)=>{
        dispatch({type:NotesActionTypes.FETCH_NOTE});

        try{
            setTimeout(()=>{
                dispatch({type:NotesActionTypes.FETCH_NOTE_SUCCES,payload:notenames})
            },2000)
        } catch (error) {
            dispatch({type:NotesActionTypes.FETCH_NOTE_ERROR,payload:"Произошла ошибка"});
        }
    }
}

export const addNote = (notepad:INotepad) => {
    return async(dispatch:Dispatch<NoteAction>) => {
        dispatch({type:NotesActionTypes.ADD_NOTE,payload:notepad});
    }
}