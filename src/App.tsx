import React, { useState } from 'react';
import MainHeader from './components/MainHeader';
import LeftContext from './components/LeftContext';
import style from './styles/App.module.css';
import { IDirectorys, INotepad } from './types/types';
const App = () => {

  const names:IDirectorys[]=[
    {name:"Папка 1",notepads:[{name:"Блокнот 1",notes:[{name:"Заметка 1"}]}]},
    {name:"Папка 2",notepads:[{name:"Блокнот 2",notes:[{name:"Заметка 1"}]}]},
    {name:"Папка 3",notepads:[{name:"Блокнот 3",notes:[{name:"Заметка 1"}]}],},
  ]
  
  
  
    return (
      <div className={style.App}>
        <MainHeader/>
        <LeftContext  names={names} />

      </div>  

    );
};

export default App;
