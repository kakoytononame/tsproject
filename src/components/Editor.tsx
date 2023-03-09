import React, { Component } from 'react';
import "../styles/Editorstyle.css"
import {CKEditor} from "@ckeditor/ckeditor5-react"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface EditorProps{
    content:string
}

function Editor ({content}:EditorProps) {
    
        return (
            <div className="Editor">
                <CKEditor
                    editor={ClassicEditor}
                    data={content}
                />
                    
                
            
            </div>
        );
    
}

export default Editor;