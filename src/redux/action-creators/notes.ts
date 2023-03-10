import { Dispatch } from "react";
import { INote, INotepad } from "../../types/types";
import { notenames, notepadnames } from "../../services";
import { NoteAction, NotesActionTypes } from "../types/notes";
import { NoteService } from "../../services/NoteService";
import { INoteDTO } from "../../interfaces/dto/INoteDTO";

export const setNotes = (name:string) => {
    return async(dispatch:Dispatch<NoteAction>)=>{
        dispatch({type:NotesActionTypes.FETCH_NOTE});

        try{
                const result = await NoteService.getNotesByUser(name);
                console.log(result);
                dispatch({type:NotesActionTypes.FETCH_NOTE_SUCCES,payload:result})
            
        } catch (error) {
            dispatch({type:NotesActionTypes.FETCH_NOTE_ERROR,payload:"Произошла ошибка"});
        }
    }
}

export const addNote = (note:INoteDTO) => {
    return async(dispatch:Dispatch<NoteAction>) => {
        dispatch({type:NotesActionTypes.ADD_NOTE,payload:note});
    }
}