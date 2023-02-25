import React from 'react';
import MainHeader from './components/MainHeader';
import LeftContext from './components/LeftContext';
import style from './styles/App.module.css';
import { IDirectorys } from './types/types';
const App = () => {

  const names:IDirectorys[]=[
    {name:"Папка 1"},
    {name:"Папка 2"},
    {name:"Папка 3"},
  ]
  
    return (
      <div className={style.App}>
        <MainHeader/>
        <LeftContext names={names} />
      </div>  

    );
};

export default App;
