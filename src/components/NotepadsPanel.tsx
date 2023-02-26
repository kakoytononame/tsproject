import React,{FC, useState} from "react";
import { INote, INotepad } from "../types/types";
import styles from "../styles/NotepadsPanel.module.css"


interface notepadsListProps{
    names:INotepad[],
    setNotes:React.Dispatch<React.SetStateAction<INote[]>>
}

const NotepadPanel:FC<notepadsListProps>=({names,setNotes})=>{
    
    const [folders,setFolders]=useState<INotepad[]>(names); 
    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>,index:number) => {
        const notes=folders[index].notes;
        setNotes(notes);
        console.log(folders);
    }
    return(
        <div className={styles.NotepadsPanel}>
            {
                folders.map((name,index)=>
                    <div key={index} onClick={(e)=>divClickedHandler(e,index)} className={styles.NotepadsPanel_NotepadsButtons}>{name.name}</div>
                    )
            }
        </div>
    )
}

export default NotepadPanel;