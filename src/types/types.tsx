export interface IDirectorys{
    name:string,
    notepads:INotepad[]
    
}
export interface INotepad{
    name:string,
    notes:INote[]
}
export interface INote{
    name:string
}