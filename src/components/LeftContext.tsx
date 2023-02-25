import React,{FC}from "react";
import styles from "../styles/LeftContext.module.css"
import {IDirectorys} from "../types/types"

interface directorysListProps{
    names:IDirectorys[]
}
const LeftContext:FC<directorysListProps>=({names})=>{

    return(
        <div className={styles.LeftContext}>
            {
                names.map(name=>
                    <button className={styles.LeftContext_DirectoryButtons}>{name.name}</button>
                    )
            }
        </div>
    )
}

export default LeftContext;