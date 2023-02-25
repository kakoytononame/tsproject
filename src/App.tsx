import React from 'react';
import MainHeader from './components/MainHeader';
import LeftContext from './components/LeftContext';
import style from './styles/App.module.css';
const App = () => {

    return (
      <div className={style.App}>
        <MainHeader/>
        <LeftContext/>
      </div>  

    );
};

export default App;
