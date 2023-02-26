import { LoadTypes } from "../../types/types";
import { DirectoryAction, DirectorysActionTypes, IDirectorysState } from "../types/folder";

const initialState:IDirectorysState = {
    folders:[],
    load:null,
    error:null
}

export const directoryReducer = (state:IDirectorysState = initialState,action:DirectoryAction):IDirectorysState => {
    switch(action.type){
        case DirectorysActionTypes.FETCH_DIRECTORY : {
            return {
                folders:state.folders,
                error:null,
                load:LoadTypes.loading
            }
        }
        case DirectorysActionTypes.FETCH_DIRECTORY_SUCCESS:{
            return {
                folders:action.payload,
                error:null,
                load:null
            }
        }
        case DirectorysActionTypes.FETCH_DIRECTORY_ERROR:{
            return {
                folders:[],
                error:action.payload,
                load:null
            }
        }
        case DirectorysActionTypes.ADD_DIRECTORY:{
            return {
                folders:[...state.folders,action.payload],
                load:null,
                error:null
            }
        }
        default:{
            return state
        }
        
    }
}