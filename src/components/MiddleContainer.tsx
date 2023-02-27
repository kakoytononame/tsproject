import React from "react";
import LeftContext from "./LeftContext";
import MidleContext from "./MiddleContext";
import style from "../styles/MiddleContainer.module.css";
const MidleContainer=()=>{
    return(
        <div className={style.MiddleContainer}>
        <LeftContext/>
        <MidleContext/>
        </div>
    )
    
}
export default MidleContainer;