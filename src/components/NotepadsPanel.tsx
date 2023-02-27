import React,{FC, useState} from "react";
import { INote, INotepad } from "../types/types";
import styles from "../styles/NotepadsPanel.module.css"
import { useActions } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/useTypedSelector";
import { setNotes } from "../redux/action-creators/notes";




const NotepadPanel=()=>{
    
    const {notepads} = useTypeSelector(state=>state.notepad);
    const {addNotepad} = useActions();

    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>,index:number) => {
        const notes=notepads[index].notes;

        setNotes();
    }
    return(
        <div className={styles.NotepadsPanel}>
            {
                notepads.map((name,index)=>
                    <div key={index} onClick={(e)=>divClickedHandler(e,index)} className={styles.NotepadsPanel_NotepadsButtons}>{name.name}</div>
                )
            }
        </div>
    )
}

export default NotepadPanel;