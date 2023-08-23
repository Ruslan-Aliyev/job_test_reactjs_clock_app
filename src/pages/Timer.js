import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import stopButton from '../images/stop.jpg';
import playButton from '../images/play.jpg';
import pauseButton from '../images/pause.jpg';

function Timer({setDisplaySeconds}) {
  const [timer, setTimer] = useState('');
  const [ongoing, setOngoing] = useState(0);
  const [playIcon, setPlayIcon] = useState(playButton);

  useEffect(() => { 
    let start = 0;
    setTimer('00:00:00');

    const interval = setInterval(() => {
      if (ongoing === 1)
      {
        start++;

        let display = new Date(start * 1000)
          .toISOString()
          .slice(11, 19);

        setTimer(display);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [ongoing]);

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

  function stop() 
  {

  }
  function play(e) 
  {
    if (ongoing === 1)
    {
      setOngoing(0);
      setPlayIcon(playButton);
    }
    else
    {
      setOngoing(1);
      setPlayIcon(pauseButton);
    }

    e.stopPropagation();
  }

  return (
    <div id="background" onClick={toggleMenu}>
      <div id="time-display" className="center-text">{timer}</div>
      <div id="timer-bar">
        <div id="stop" onClick={() => stop()}>
          <img src={stopButton} alt="" />
        </div>
        <div id="play" onClick={(e) => play(e)}>
          <img src={playIcon} alt="" />
        </div>
      </div>
      <Menu visibility={visibility} onChangeMode={onChangeMode}></Menu>
    </div>
  );
}

export default Timer;
