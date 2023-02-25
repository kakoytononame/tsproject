import React,{FC}from "react";
import styles from "../styles/LeftContext.module.css"
import {IDirectorys} from "../types/types"

interface directorysListProps{
    name:IDirectorys[]
}
const LeftContext:FC<directorysListProps>=({name})=>{

    return(
        <div className={styles.LeftContext}>
            {name.map(user=>
                console.log(user);
                )}
        </div>
    )
}

export default LeftContext;