import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';

function Schedule() {

  const [bar, setBar] = useState({ isHidden: false });
  
  function toggleMenu() 
  {
    setBar({ isHidden: !bar.isHidden });
  }

  let visibility = { visibility: bar.isHidden ? 'hidden' : 'visible' };

  function onChangeMode(haveSeconds) 
  {
    //@Todo
  }

  return (
    <div id="background" onClick={toggleMenu}>
      <div id="time-display" className="center-text">Schedule</div>
      <Menu visibility={visibility} onChangeMode={onChangeMode}></Menu>
    </div>
  );
}

export default Schedule;
