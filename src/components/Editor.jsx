import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import style from '../styles/MiddleContext.module.css'


const Editor = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
	
	const config = 
		{
			readonly: false, // all options from https://xdsoft.net/jodit/doc/,
			placeholder: placeholder || 'Start typings...'
		};
		
	

	return (
		<JoditEditor className=""
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
	);
};
export default Editor;