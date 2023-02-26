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

    const[notepads,setNotepads]=useState<INotepad[]>([]);
    const[notes,setNotes]=useState<INote[]>([]);

    const {folders,load} = useTypeSelector(state=>state.directory);


    return(
        <div className={styles.LeftContext}>
            {folders.length > 0 && <>
                <DirectoryPanel setNotepads={setNotepads}/>
                {notepads.length > 0 && <NotepadPanel setNotes={setNotes} names={notepads}/>}
                {notes.length>0 && <NotesPanel notes={notes}/>}
            </>}
            {load === LoadTypes.loading && <h1>...Loading</h1>}
        </div>
    )
}

export default LeftContext;