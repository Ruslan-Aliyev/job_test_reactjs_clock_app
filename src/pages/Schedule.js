import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import Customize from '../components/Customize.js';
import skipButton from '../images/skip.jpg';
import playButton from '../images/play.jpg';
import pauseButton from '../images/pause.jpg';

function Schedule({setDisplaySeconds, focusDuration, breakDuration}) {
  const [schedule, setSchedule] = useState('');
  const [ongoing, setOngoing] = useState(true);
  const [counter, setCounter] = useState(focusDuration);
  const [playIcon, setPlayIcon] = useState(pauseButton);
  const [mode, setMode] = useState('Focus 1');

  useEffect(() => { 
    let initDisplay = new Date(counter * 1000)
      .toISOString()
      .slice(11, 19);
    setSchedule(initDisplay);
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

  function skip(e) 
  {
    if (mode === 'Focus 1')
    {
      setMode('Break 1');
      setCounter(breakDuration);
    }
    else
    {
      setMode('Focus 1');
      setCounter(focusDuration);
    }

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
      <Customize visibility={visibility} ></Customize>
      <div id="time-display" className="center-text">{schedule}</div>
      <div id="schedule-bar">
        <div id="skip" onClick={(e) => skip(e)}>
          <img src={skipButton} alt="" />
        </div>
        <div id="mode">
          <p>{mode}</p>
        </div>
        <div id="play" onClick={(e) => play(e)}>
          <img src={playIcon} alt="" />
        </div>
      </div>
      <Menu visibility={visibility} onChangeMode={onChangeMode}></Menu>
    </div>
  );
}

export default Schedule;
