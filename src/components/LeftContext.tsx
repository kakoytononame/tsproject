import React,{FC, useState}from "react";
import styles from "../styles/LeftContext.module.css"
import {IDirectorys, INote, INotepad, LoadTypes} from "../types/types"
import NotepadPanel from "./NotepadsPanel";
import DirectoryPanel from "./DirectoryPanel";
import NotesPanel from "./NotesPanel";
import { useTypeSelector } from "../hooks/useTypedSelector";


interface LeftContextProps{
  
}



const LeftContext:FC<LeftContextProps>=()=>{


    const {folders,load} = useTypeSelector(state=>state.directory);
    const {notepads}=useTypeSelector(state=>state.notepad)
    const{name}=useTypeSelector(state=>state.notes)

    return(
        <div className={styles.LeftContext}>
            {folders.length > 0 && <>
                <DirectoryPanel />
                {notepads.length > 0 && <NotepadPanel />}
                {name.length>0 && <NotesPanel />}
            </>}
            {load === LoadTypes.loading && <h1>...Loading</h1>}
        </div>
    )
}

export default LeftContext;