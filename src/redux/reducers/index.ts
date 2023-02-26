import { combineReducers } from "@reduxjs/toolkit";
import { directoryReducer } from "./folderReducer";
import { notepadReducer } from "./noteReducer";

export const rootReducer = combineReducers({
    directory:directoryReducer,
    notepad:notepadReducer
});


export type RootState = ReturnType<typeof rootReducer>