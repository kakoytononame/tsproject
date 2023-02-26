import React,{FC, useState} from "react";
import { IDirectorys, INotepad } from "../types/types";
import styles from "../styles/DirectoryPanel.module.css"
import { useTypeSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";


interface directorysListProps{
    setNotepads:React.Dispatch<React.SetStateAction<INotepad[]>>
}

const DirectoryPanel:FC<directorysListProps>=({setNotepads})=>{
    const {folders} = useTypeSelector(state=>state.directory);

    const {addDirectory} = useActions();
    
    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>,index:number) => {
        const notepads=folders[index].notepads;
        setNotepads(notepads);
        
        addDirectory({
            name:`Папка ${folders.length}`,
            notepads:[]
        })
    }
    
    return(
        <div className={styles.DirectoryPanel}>
            {
                folders.map((name,index)=>
                    <div key={index} onClick={(e)=>divClickedHandler(e,index)} className={styles.DirectoryPanel_DirectoryButtons}>{name.name}</div>
                    )
            }
        </div>
    )
}

export default DirectoryPanel;