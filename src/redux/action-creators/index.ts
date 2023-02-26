import { NotepadsActionTypes } from '../types/notepad'
import * as DirectoryActionCreators from './directory'
import * as NotepadsActionCreators from './notepads'

export const actionCreators = {
    ...DirectoryActionCreators,
    ...NotepadsActionCreators
}