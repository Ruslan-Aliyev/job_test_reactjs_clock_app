import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import stopButton from '../images/stop.jpg';
import playButton from '../images/play.jpg';
import pauseButton from '../images/pause.jpg';
import { useNavigate } from 'react-router-dom';

function Countdown({setDisplaySeconds, countdownDuration}) {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState('');

  useEffect(() => { 
    let start = countdownDuration;
    let initDisplay = new Date(start * 1000)
      .toISOString()
      .slice(11, 19);
    setCountdown(initDisplay);

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

  function cease() 
  {
    navigate("/countdown-menu");
  }

  return (
    <div id="background" onClick={toggleMenu}>
      <div id="time-display" className="center-text">{countdown}</div>
      <div id="countdown-bar">
        <div id="stop" onClick={() => cease()}>
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
