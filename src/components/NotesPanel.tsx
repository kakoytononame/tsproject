import { INote } from "../types/types";
import style from '../styles/NotesPanel.module.css';
import { useTypeSelector } from "../hooks/useTypedSelector";
import { FC, useContext } from "react";
import { setNotes } from "../redux/action-creators/notes";
import { Editor } from "tinymce";
import { NoteContext } from "../contexts/NoteContext";
import { notenames } from "../services";



const NotesPanel=()=>{

    const {name}=useTypeSelector(state=>state.notes);
    const {setContent}=useContext(NoteContext);

    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>,name0:string) => {
        const note = name.find(p=>p.name==name0)
        if(note&&setContent){
            setContent(note.text);
        }
        
    }

    return(
        <div className={style.NotesPanel}>
            {name.map((name,index,text)=>
                    <div key={index} onClick={(e)=>divClickedHandler(e,name.name)} className={style.NotesPanel_NotesButtons}>{name.name}</div>,
                    
                )
                }
        </div>
    )

}

export default NotesPanel;