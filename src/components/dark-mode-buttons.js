import React, { useState } from 'react';

import DarkButton from './darkButton';
import LightButton from './lightButton';

import useDarkMode from "use-dark-mode";

export default function DarkModeButtons() {
  
  const darkMode = useDarkMode(false);
  

  const toggleDarkMode = (theme) => {
    theme === 'dark' ? darkMode.enable() : darkMode.disable();
    console.log('toggling theme');
    console.log(darkMode);
  }

  return (
    <div className="dark-mode-buttons">
      
      {darkMode.value ? <LightButton onClick={toggleDarkMode}/> : <DarkButton onClick={toggleDarkMode}/>}
    </div>
    
  )

}