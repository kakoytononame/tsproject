import { Jodit } from "jodit-react";
import React, { useContext, useEffect } from "react";
import { NoteContext } from "../contexts/NoteContext";
import style from "../styles/MiddleContext.module.css"

import Editor from "./Editor"

const MiddleContext=()=>{
    
   
    
    const {content}=useContext(NoteContext);
    
    return(
        <div className={style.MiddleContext_DivContainer}>
                <form method="post">
                    <Editor content={content}></Editor>
                </form>
            
        </div>
    )
    
}
export default MiddleContext;