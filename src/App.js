import React, { useContext } from 'react';
import context from './Settings';
import SelectLanguage from './SelectLanguage';
import './App.css';

function App() {  
  const { settings, setSettings } = useContext(context);

  return (
    <div className='main'>
      <div className='mainMenu'>
        <h1 className='mainMenuTitle'>Welcome to the (totally) fastest langauge learner!</h1>
        <h4 className='mainMenuSubTitle'>by ArcadeFortune - Alessio Lama</h4>
        <br/>
        <br/>
        <h1 className='mainMenuSelect'>Select a language to learn.</h1>
        <SelectLanguage />
        <br/>
        <br/>
        <h1 className='mainMenuConfirm'>Are you ready?</h1>
      </div>
    </div>
  );
}

export default App;
