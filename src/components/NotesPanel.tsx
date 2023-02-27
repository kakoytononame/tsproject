import { INote } from "../types/types";
import style from '../styles/NotesPanel.module.css';
import { useTypeSelector } from "../hooks/useTypedSelector";
import { FC } from "react";
import { setNotes } from "../redux/action-creators/notes";



const NotesPanel=()=>{

    const {name}=useTypeSelector(state=>state.notes);

    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>,name:string) => {

        
    }

    return(
        <div className={style.NotesPanel}>
            {name.map((name,index)=>
                    <div key={index} onClick={(e)=>divClickedHandler(e,name.name)} className={style.NotesPanel_NotesButtons}>{name.name}</div>
                )
                }
        </div>
    )

}

export default NotesPanel;