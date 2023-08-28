import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import stopButton from '../images/stop.jpg';
import playButton from '../images/play.jpg';
import pauseButton from '../images/pause.jpg';

function Timer({setDisplaySeconds}) {
  const [timer, setTimer] = useState('');
  const [ongoing, setOngoing] = useState(false);
  const [counter, setCounter] = useState(1);
  const [playIcon, setPlayIcon] = useState(playButton);

  useEffect(() => { 
    setTimer('00:00:00');
  }, []);

  useEffect(() => { 
    let interval = setInterval(() => {
      if (ongoing)
      {
        setCounter((oldCounter) => oldCounter + 1);
        let display = new Date(counter * 1000)
          .toISOString()
          .slice(11, 19);
        setTimer(display);
      }
    }, 1000);

    return () => { clearInterval(interval); };
  }, [counter, ongoing]);

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

  function stop(e) 
  {
    setTimer('00:00:00');
    setCounter(1);
    setOngoing(false);
    setPlayIcon(playButton);
    e.stopPropagation();
  }
  function play(e) 
  {
    if (ongoing === true)
    {
      setOngoing(false);
      setPlayIcon(playButton);
    }
    else
    {
      setOngoing(true);
      setPlayIcon(pauseButton);
    }

    e.stopPropagation();
  }

  return (
    <div id="background" onClick={toggleMenu}>
      <div id="time-display" className="center-text">{timer}</div>
      <div id="timer-bar">
        <div id="stop" onClick={(e) => stop(e)}>
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
