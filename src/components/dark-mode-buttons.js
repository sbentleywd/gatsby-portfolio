import React from 'react';

import DarkButton from './darkButton';
import LightButton from './lightButton';

import useDarkMode from "use-dark-mode";

export default function DarkModeButtons() {
  
  const darkMode = useDarkMode(false);
  

  const toggleDarkMode = (theme) => {
    // toggles dark mode which adds class to body of "dark-mode" or "light mode" which is picked up by css
    theme === 'dark' ? darkMode.enable() : darkMode.disable();
    
  }

  // returns either light mode or dark mode button depending on current theme
  return (
    <div className="dark-mode-buttons">
      
      {darkMode.value ? <LightButton onClick={toggleDarkMode}/> : <DarkButton onClick={toggleDarkMode}/>}
    </div>
    
  )

}