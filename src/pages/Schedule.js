import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import skipButton from '../images/skip.jpg';
import playButton from '../images/play.jpg';
import pauseButton from '../images/pause.jpg';

function Schedule({setDisplaySeconds}) {
  const [schedule, setSchedule] = useState('');
  const [ongoing, setOngoing] = useState(true);
  const [counter, setCounter] = useState(1500);
  const [playIcon, setPlayIcon] = useState(pauseButton);

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
        setCounter((oldCounter) => oldCounter - 1);
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
      <div id="time-display" className="center-text">{schedule}</div>
      <div id="schedule-bar">
        <div id="skip">
          <img src={skipButton} alt="" />
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
