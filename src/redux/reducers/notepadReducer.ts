import { LoadTypes } from "../../types/types";
import { INotepadState, NotepadAction, NotepadsActionTypes } from "../types/notepad";

const initialState:INotepadState = {
    notepads:[],
    load:null,
    error:null
}

export const notepadReducer=(state:INotepadState=initialState,action:NotepadAction):INotepadState=>{
    switch(action.type){
        case NotepadsActionTypes.FETCH_NOTEPAD:{
            return{
                notepads:state.notepads,
                error:null,
                load:LoadTypes.loading
            }
        }
        case NotepadsActionTypes.FETCH_NOTEPAD_SUCCES:{
            return{
                notepads:action.payload,
                error:null,
                load:null
            }
        }
        case NotepadsActionTypes.FETCH_NOTEPAD_ERROR:{
            return{
                notepads:[],
                error:action.payload,
                load:null
            }
        }
        case NotepadsActionTypes.ADD_NOTEPAD:{
            return{
                notepads:[...state.notepads,action.payload],
                load:null,
                error:null
            }
        }
        default:{
            return state
        }
    }
}