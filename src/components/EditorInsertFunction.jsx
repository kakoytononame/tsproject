import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function EditorInserFunction(text){
    CKEditor.instances.my_editor.insertHtml(text);
} 
    
     
    
    

