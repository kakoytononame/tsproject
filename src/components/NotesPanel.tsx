import { INote } from "../types/types";
import style from '../styles/NotesPanel.module.css';

interface INotesProps{
    notes:INote[],
}

export default function NotesPanel({notes}:INotesProps){

    const clickHandler = (index:number) => {
       
    }

    return(
        <div className={style.NotesPanel}>
            {
                notes.map((name,index)=>
                    <div key={index} onClick={()=>clickHandler} className={style.NotesPanel_NotesButtons}>{name.name}</div>
                    )
            }
        </div>
    )

}
