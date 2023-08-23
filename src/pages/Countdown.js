import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import stopButton from '../images/stop.jpg';
import playButton from '../images/play.jpg';
import pauseButton from '../images/pause.jpg';

function Countdown({setDisplaySeconds}) {
  const [countdown, setCountdown] = useState('');

  useEffect(() => { 
    let start = 300; // Dummy 5min
    setCountdown('00:05:00');

    const interval = setInterval(() => {
      start--;

      let display = new Date(start * 1000)
        .toISOString()
        .slice(11, 19);

      setCountdown(display);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <div id="time-display" className="center-text">{countdown}</div>
      <div id="countdown-bar">
        <div id="stop">
          <img src={stopButton} alt="" />
        </div>
        <div id="play">
          <img src={playButton} alt="" />
        </div>
      </div>
      <Menu visibility={visibility} onChangeMode={onChangeMode}></Menu>
    </div>
  );
}

export default Countdown;
