import React,{FC, useState} from "react";
import { INote, INotepad } from "../types/types";
import styles from "../styles/NotepadsPanel.module.css"
import { useActions } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/useTypedSelector";
import EditorInsertFunction from "../components/EditorInsertFunction";





const NotepadPanel=()=>{
    
    const {notepads} = useTypeSelector(state=>state.notepad);
    const {addNotepad,setNotes} = useActions();
    
    
    
    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>,name:string) => {

        setNotes(name);
    }
    return(
        
        <div className={styles.NotepadsPanel}>
            {
                notepads.map((name,index)=>
                    <div key={index} onClick={(e)=>divClickedHandler(e,name.name)} className={styles.NotepadsPanel_NotepadsButtons}>{name.name}</div>,
                    
                )
                
            }
        </div>
    )
}

export default NotepadPanel;