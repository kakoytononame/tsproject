import React from "react";
import LeftContext from "./LeftContext";
import MidleContext from "./MiddleContext";
import style from "../styles/MiddleContainer.module.css";
import NoteProvider from "../contexts/NoteProvider";
const MidleContainer=()=>{
    return(
        <NoteProvider>
            <div className={style.MiddleContainer}>
                <LeftContext/>
                <MidleContext/>
            </div>
        </NoteProvider>
        
    )
    
}
export default MidleContainer;