import { INotepadDTO } from "../../interfaces/dto/INotepadDTO";
import { INotepad, LoadTypes } from "../../types/types";

export interface INotepadState{
    notepads:INotepadDTO[],
    load:LoadTypes|null,
    error:string|null
    
}

export enum NotepadsActionTypes{
    FETCH_NOTEPAD="FETCH_NOTEPAD",
    FETCH_NOTEPAD_SUCCES="FETCH_NOTEPAD_SUCCES",
    FETCH_NOTEPAD_ERROR="FETCH_NOTEPAD_ERROR",
    ADD_NOTEPAD="ADD_NOTEPAD"
}

interface FetchNotepadsAction{
    type:NotepadsActionTypes.FETCH_NOTEPAD,
}

interface FetchNotepadsSuccessAction{
    type:NotepadsActionTypes.FETCH_NOTEPAD_SUCCES,
    payload:INotepadDTO[]
}

interface FetchNotepadsErrorAction{
    type:NotepadsActionTypes.FETCH_NOTEPAD_ERROR,
    payload:string
}

interface AddNotepadAction{
    type:NotepadsActionTypes.ADD_NOTEPAD,
    payload:INotepadDTO
}

export type NotepadAction = FetchNotepadsAction|FetchNotepadsSuccessAction|FetchNotepadsErrorAction|AddNotepadAction;