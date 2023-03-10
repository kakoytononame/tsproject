import React,{FC, useState} from "react";
import styles from "../styles/DirectoryPanel.module.css"
import { useTypeSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { IDirectoryDTO } from "../interfaces/dto/IDirectoryDTO";

interface IDirectoryProps{
    directory:IDirectoryDTO
    
}



const DirectoryPanel=()=>{
    const {folders} = useTypeSelector(state=>state.directory);
    const {addDirectory,setNotepads} = useActions();
    
    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>,name:string) => {
       
        setNotepads(name);
        
    }
    
    return(
        <div className={styles.DirectoryPanel}>
            {
                folders.map((name,index)=>
                    <div key={index} onClick={(e)=>divClickedHandler(e,name.name)} className={styles.DirectoryPanel_DirectoryButtons}>{name.name}</div>
                    )
            }
        </div>
    )
}

export default DirectoryPanel;