import { combineReducers } from "@reduxjs/toolkit";
import { directoryReducer } from "./folderReducer";

export const rootReducer = combineReducers({
    directory:directoryReducer
});

export type RootState = ReturnType<typeof rootReducer>