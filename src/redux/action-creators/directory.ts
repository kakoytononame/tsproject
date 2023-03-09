import { Dispatch } from "react"
import { names } from "../../services";
import { DirectoryAction, DirectorysActionTypes } from "../types/folder"
import {DirectoryService} from "../../services/DirectoryService"
import { IDirectoryDTO } from "../../interfaces/dto/IDirectoryDTO";

export const setDirectory = () => {
    return async(dispatch:Dispatch<DirectoryAction>)=>{
        dispatch({type:DirectorysActionTypes.FETCH_DIRECTORY});

        try{
                
                const result = await DirectoryService.getDirectorysByUser();
                dispatch({type:DirectorysActionTypes.FETCH_DIRECTORY_SUCCESS,payload:result})
            
        } catch (error) {
            dispatch({type:DirectorysActionTypes.FETCH_DIRECTORY_ERROR,payload:"Произошла ошибка"});
        }
    }
}

export const addDirectory = (directory:IDirectoryDTO) => {
    return async(dispatch:Dispatch<DirectoryAction>) => {
        dispatch({type:DirectorysActionTypes.ADD_DIRECTORY,payload:directory});
    }
}