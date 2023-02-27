import { INote, LoadTypes } from "../../types/types";

export interface INoteState{
    name:INote[],
    load:LoadTypes|null,
    error:string|null
    
}

export enum NotesActionTypes{
    FETCH_NOTE="FETCH_NOTE",
    FETCH_NOTE_SUCCES="FETCH_NOTE_SUCCES",
    FETCH_NOTE_ERROR="FETCH_NOTE_ERROR",
    ADD_NOTE="ADD_NOTE"
}

interface FetchNotesAction{
    type:NotesActionTypes.FETCH_NOTE,
}

interface FetchNotesSuccessAction{
    type:NotesActionTypes.FETCH_NOTE_SUCCES,
    payload:INote[]
}

interface FetchNotesErrorAction{
    type:NotesActionTypes.FETCH_NOTE_ERROR,
    payload:string
}

interface AddNoteAction{
    type:NotesActionTypes.ADD_NOTE,
    payload:INote
}

export type NoteAction = FetchNotesAction|FetchNotesSuccessAction|FetchNotesErrorAction|AddNoteAction;