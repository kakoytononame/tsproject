import { IDirectorys, LoadTypes } from "../../types/types";



export interface IDirectorysState{
    folders:IDirectorys[],
    load:LoadTypes|null,
    error:string|null
}

export enum DirectorysActionTypes{
    FETCH_DIRECTORY = "FETCH_DIRECTORY",
    FETCH_DIRECTORY_SUCCESS = "FETCH_DIRECTORY_SUCCESS",
    FETCH_DIRECTORY_ERROR = "FETCH_DIRECTORY_ERROR",
    ADD_DIRECTORY = " ADD_DIRECTORY"
}

interface FetchDirectorysAction{
    type:DirectorysActionTypes.FETCH_DIRECTORY,
}

interface FetchDirectorysSuccessAction{
    type:DirectorysActionTypes.FETCH_DIRECTORY_SUCCESS,
    payload:IDirectorys[]
}

interface FetchDirectorysErrorAction{
    type:DirectorysActionTypes.FETCH_DIRECTORY_ERROR,
    payload:string
}

interface AddDirectoryAction{
    type:DirectorysActionTypes.ADD_DIRECTORY,
    payload:IDirectorys
}

export type DirectoryAction = FetchDirectorysAction | FetchDirectorysErrorAction | 
    FetchDirectorysSuccessAction | AddDirectoryAction;

