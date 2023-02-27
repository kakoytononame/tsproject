import React, { useEffect, useState } from 'react';
import MainHeader from './components/MainHeader';
import LeftContext from './components/LeftContext';
import style from './styles/App.module.css';
import { IDirectorys, INotepad } from './types/types';
import { useActions } from './hooks/useActions';
import { useTypeSelector } from './hooks/useTypedSelector';
import MidleContext from './components/MiddleContext';
import MiddleContainer from './components/MiddleContainer';
const App = () => {

  const {setDirectory} = useActions();
  
   useEffect(()=>{
      setDirectory();
   },[]);
  
  return (
      <div className={style.App}>
        <MainHeader/>
        <MiddleContainer/>

      </div>  

    );
};

export default App;
