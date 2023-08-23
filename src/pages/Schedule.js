import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import skipButton from '../images/skip.jpg';
import playButton from '../images/play.jpg';
import pauseButton from '../images/pause.jpg';

function Schedule({setDisplaySeconds}) {
  const [schedule, setSchedule] = useState('');

  useEffect(() => { 
    let focus = 1500; // 25min
    setSchedule('00:25:00');

    const interval = setInterval(() => {
      focus--;

      let display = new Date(focus * 1000)
        .toISOString()
        .slice(11, 19);

      setSchedule(display);
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
      <div id="time-display" className="center-text">{schedule}</div>
      <div id="schedule-bar">
        <div id="skip">
          <img src={skipButton} alt="" />
        </div>
        <div id="play">
          <img src={playButton} alt="" />
        </div>
      </div>
      <Menu visibility={visibility} onChangeMode={onChangeMode}></Menu>
    </div>
  );
}

export default Schedule;
