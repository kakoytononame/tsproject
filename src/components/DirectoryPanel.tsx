import React,{FC, useState} from "react";
import { IDirectorys, INotepad } from "../types/types";
import styles from "../styles/DirectoryPanel.module.css"


interface directorysListProps{
    names:IDirectorys[],
    setNotepads:React.Dispatch<React.SetStateAction<INotepad[]>>
}

const DirectoryPanel:FC<directorysListProps>=({names,setNotepads})=>{
    
    const [folders,setFolders]=useState<IDirectorys[]>(names); 
    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>,index:number) => {
        const notepads=folders[index].notepads;
        setNotepads(notepads);
        
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