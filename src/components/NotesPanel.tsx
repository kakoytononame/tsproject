import { INote } from "../types/types";
import style from '../styles/NotesPanel.module.css';
import { useTypeSelector } from "../hooks/useTypedSelector";
import { FC } from "react";
import { setNotes } from "../redux/action-creators/notes";



const NotepadPanel=()=>{

    const {name}=useTypeSelector(state=>state.notes);

    const divClickedHandler = (index:number) => {
        const note=name[index];

        setNotes();
    }

    return(
        <div className={style.NotesPanel}>
        </div>
    )

}

export default NotepadPanel;