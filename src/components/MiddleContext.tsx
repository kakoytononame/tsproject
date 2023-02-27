import { Jodit } from "jodit-react";
import React from "react";
import tinymce from "tinymce";
import style from "../styles/MiddleContext.module.css"
import Editor from "./Editor"

const MiddleContext=()=>{
    
    tinymce.init({
        selector: '#mytextarea'
      });
    return(
        <div className={style.MiddleContext_DivContainer}>
                <form method="post">
                    <textarea id="mytextarea">Hello, World!</textarea>
                </form>
            <Editor  placeholder={""}/>
        </div>
    )
    
}
export default MiddleContext;