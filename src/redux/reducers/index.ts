import { combineReducers } from "@reduxjs/toolkit";
import { directoryReducer } from "./folderReducer";
import { notepadReducer } from "./notepadReducer";
import {noteReducer} from "./noteReducer";

export const rootReducer = combineReducers({
    directory:directoryReducer,
    notepad:notepadReducer,
    notes:noteReducer
});


export type RootState = ReturnType<typeof rootReducer>