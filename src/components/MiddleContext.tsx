import { Jodit } from "jodit-react";
import React, { useEffect } from "react";
import style from "../styles/MiddleContext.module.css"

import Editor from "./Editor"

const MiddleContext=()=>{
    
   
    
    
    
    return(
        <div className={style.MiddleContext_DivContainer}>
                <form method="post">
                    <Editor content="Введите текст здесь"></Editor>
                </form>
            
        </div>
    )
    
}
export default MiddleContext;