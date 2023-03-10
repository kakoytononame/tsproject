import { createContext } from "react";

export interface INoteContextProps{
    content:string,
    setContent?:React.Dispatch<React.SetStateAction<string>>
}

const defaultValue:INoteContextProps={
    content:""
}
 export const NoteContext = createContext<INoteContextProps>(defaultValue);