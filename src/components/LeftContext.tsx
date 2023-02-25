import React,{FC, useState}from "react";
import styles from "../styles/LeftContext.module.css"
import {IDirectorys} from "../types/types"


interface directorysListProps{
    names:IDirectorys[]
}



const LeftContext:FC<directorysListProps>=({names})=>{

    
        const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        var div = event.currentTarget.innerHTML;
        var curel=event.currentTarget;
         
        if(div==="Папка 1"){
            var lgt=names.length+1;
            var list=names;
            names.push(names[0]);   
            console.log(names);
        
        }
        
    }
    return(
        <div className={styles.LeftContext}>
            {
                names.map(name=>
                    <div onClick={divClickedHandler} className={styles.LeftContext_DirectoryButtons}>{name.name}</div>
                    )
            }
        </div>
    )
}

export default LeftContext;