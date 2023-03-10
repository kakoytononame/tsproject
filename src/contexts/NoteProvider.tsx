import {NoteContext} from "./NoteContext"
import { useMemo,useState } from "react"

interface NoteProviderProps{
    children?:React.ReactNode
}

export default function NoteProvider({children}:NoteProviderProps){
    const[content,setContent]=useState<string>("")

    const contextValue = useMemo(()=>({content,setContent}),[content]);

    return(
        <NoteContext.Provider value={contextValue}>
            {children}
        </NoteContext.Provider>
    )
}