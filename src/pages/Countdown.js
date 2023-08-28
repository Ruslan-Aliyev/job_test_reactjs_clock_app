import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import stopButton from '../images/stop.jpg';
import playButton from '../images/play.jpg';
import pauseButton from '../images/pause.jpg';
import { useNavigate } from 'react-router-dom';

function Countdown({setDisplaySeconds, countdownDuration}) {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState('');
  const [ongoing, setOngoing] = useState(true);
  const [counter, setCounter] = useState(countdownDuration);
  const [playIcon, setPlayIcon] = useState(pauseButton);

  useEffect(() => { 
    let initDisplay = new Date(counter * 1000)
      .toISOString()
      .slice(11, 19);
    setCountdown(initDisplay);
  }, [counter]);

  useEffect(() => { 
    let interval = setInterval(() => {
      if (ongoing)
      {
        if (counter > 0)
        {
          setCounter((oldCounter) => oldCounter - 1);
        }
        else
        {
          setPlayIcon(playButton);
        }
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

  function cease() 
  {
    navigate("/countdown-menu");
  }

  function pause(e) 
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
      <div id="time-display" className="center-text">{countdown}</div>
      <div id="countdown-bar">
        <div id="stop" onClick={() => cease()}>
          <img src={stopButton} alt="" />
        </div>
        <div id="play" onClick={(e) => pause(e)}>
          <img src={playIcon} alt="" />
        </div>
      </div>
      <Menu visibility={visibility} onChangeMode={onChangeMode}></Menu>
    </div>
  );
}

export default Countdown;
