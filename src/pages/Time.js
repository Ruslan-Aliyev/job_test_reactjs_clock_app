import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';

function Time({displaySeconds, setDisplaySeconds}) {
  const [time, setTime] = useState('');

  useEffect(() => { 
    const interval = setInterval(() => {
      let date = new Date(); 
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();

      hh = (hh < 10) ? "0" + hh : hh;
      mm = (mm < 10) ? "0" + mm : mm;
      ss = (ss < 10) ? "0" + ss : ss;

      let display = hh + ":" + mm;

      if (displaySeconds)
      {
        display += ":" + ss;
      }

      setTime(display);
    }, 500);

    return () => clearInterval(interval);
  }, [displaySeconds]);

  const [bar, setBar] = useState({ isHidden: true });
  
  function toggleMenu() 
  {
    setBar({ isHidden: !bar.isHidden });
  }

  let visibility = { visibility: bar.isHidden ? 'hidden' : 'visible' };

  function onChangeMode(haveSeconds) 
  {
    setDisplaySeconds(haveSeconds);
  }

  return (
    <div id="background" onClick={toggleMenu}>
      <div id="time-display" className="center-text">{time}</div>
      <Menu visibility={visibility} onChangeMode={onChangeMode}></Menu>
    </div>
  );
}

export default Time;
