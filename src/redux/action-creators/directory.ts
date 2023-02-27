import { Dispatch } from "react"
import { names } from "../../services";
import { IDirectorys } from "../../types/types";
import { DirectoryAction, DirectorysActionTypes } from "../types/folder"

export const setDirectory = () => {
    return async(dispatch:Dispatch<DirectoryAction>)=>{
        dispatch({type:DirectorysActionTypes.FETCH_DIRECTORY});

        try{
            
                dispatch({type:DirectorysActionTypes.FETCH_DIRECTORY_SUCCESS,payload:names})
            
        } catch (error) {
            dispatch({type:DirectorysActionTypes.FETCH_DIRECTORY_ERROR,payload:"Произошла ошибка"});
        }
    }
}

export const addDirectory = (directory:IDirectorys) => {
    return async(dispatch:Dispatch<DirectoryAction>) => {
        dispatch({type:DirectorysActionTypes.ADD_DIRECTORY,payload:directory});
    }
}