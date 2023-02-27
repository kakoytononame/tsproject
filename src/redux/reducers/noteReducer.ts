import { LoadTypes } from "../../types/types";
import { INoteState, NoteAction, NotesActionTypes } from "../types/notes";

const initialState:INoteState = {
    name:[],
    load:null,
    error:null
}

export const noteReducer=(state:INoteState=initialState,action:NoteAction):INoteState=>{
    switch(action.type){
        case NotesActionTypes.FETCH_NOTE:{
            return{
                name:state.name,
                error:null,
                load:LoadTypes.loading
            }
        }
        case NotesActionTypes.FETCH_NOTE_SUCCES:{
            return{
                name:action.payload,
                error:null,
                load:null
            }
        }
        case NotesActionTypes.FETCH_NOTE_ERROR:{
            return{
                name:[],
                error:action.payload,
                load:null
            }
        }
        case NotesActionTypes.ADD_NOTE:{
            return{
                name:[...state.name,action.payload],
                load:null,
                error:null
            }
        }
        default:{
            return state
        }
    }
}