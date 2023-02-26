import React, { useEffect, useState } from 'react';
import MainHeader from './components/MainHeader';
import LeftContext from './components/LeftContext';
import style from './styles/App.module.css';
import { IDirectorys, INotepad } from './types/types';
import { useActions } from './hooks/useActions';
import { useTypeSelector } from './hooks/useTypedSelector';
const App = () => {

  const {setDirectory} = useActions();
  
   useEffect(()=>{
      setDirectory();
   },[]);
  
  return (
      <div className={style.App}>
        <MainHeader/>
        <LeftContext/>
        

      </div>  

    );
};

export default App;
