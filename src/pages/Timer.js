import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';

function Timer() {
  const [timer, setTimer] = useState('');

  useEffect(() => { 
    let start = 0;
    setTimer('00:00:00');

    const interval = setInterval(() => {
      start++;

      let display = new Date(start * 1000)
        .toISOString()
        .slice(11, 19);

      setTimer(display);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <div id="time-display" className="center-text">{timer}</div>
      <Menu visibility={visibility} onChangeMode={onChangeMode}></Menu>
    </div>
  );
}

export default Timer;
