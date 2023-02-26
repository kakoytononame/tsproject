import React,{FC, useState}from "react";
import styles from "../styles/LeftContext.module.css"
import {IDirectorys, INote, INotepad} from "../types/types"
import NotepadPanel from "./NotepadsPanel";
import DirectoryPanel from "./DirectoryPanel";


interface LeftContextProps{
    names:IDirectorys[]
    
}



const LeftContext:FC<LeftContextProps>=({names})=>{

    const[notepads,setNotepads]=useState<INotepad[]>([]);
    const[notes,setNotes]=useState<INote[]>([]);
    return(
        <div className={styles.LeftContext}>
            <DirectoryPanel setNotepads={setNotepads} names={names}/>
            <NotepadPanel setNotes={setNotes} names={notepads}/>
        </div>
    )
}

export default LeftContext;