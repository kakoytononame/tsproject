import { NotepadsActionTypes } from '../types/notepad'
import * as DirectoryActionCreators from './directory'
import * as NotepadsActionCreators from './notepads'
import * as NotesActionCreators from './notes'

export const actionCreators = {
    ...DirectoryActionCreators,
    ...NotepadsActionCreators,
    ...NotesActionCreators
}