import { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import playButton from '../images/play.jpg';
import Picker from 'react-simple-picker';
import { useNavigate } from 'react-router-dom';

function CountdownMenu({setDisplaySeconds, setCountdownDuration}) {
  const navigate = useNavigate();
  const [bar, setBar] = useState({ isHidden: true });
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(5);
  const [second, setSecond] = useState(0);

  function toggleMenu() 
  {
    setBar({ isHidden: !bar.isHidden });
  }

  let visibility = { visibility: bar.isHidden ? 'hidden' : 'visible' };

  function onChangeMode(haveSeconds) 
  {
    setDisplaySeconds(haveSeconds);
  }

  function launch()
  {
  	let duration = (hour * 3600) + (minute * 60) + second;
  	setCountdownDuration(duration);
  	navigate("/countdown");
  }
  function quickLaunch(duration)
  {
  	setCountdownDuration(duration);
  	navigate("/countdown");
  }

  return (
    <div id="background" onClick={toggleMenu}>
	    <div id="duration-pickers" onClick={e => e.stopPropagation()}>
				<Picker
					id="hours-dial"
					className="dial"
					height={500}
					iconAdd={<div></div>}
					iconMinus={<div></div>}
					initCount={0}
					minCount={0}
					maxCount={23}
					preloadCount={8}
					renderMask={Mask => <Mask className="mask">Hours</Mask>}
					onChange={hours => setHour(hours)}
				/>
				<Picker
					id="minutes-dial"
					className="dial"
					height={500}
					iconAdd={<div></div>}
					iconMinus={<div></div>}
					initCount={5}
					minCount={0}
					maxCount={59}
					preloadCount={8}
					renderMask={Mask => <Mask className="mask">Minutes</Mask>}
					onChange={minutes => setMinute(minutes)}
				/>
				<Picker
					id="seconds-dial"
					className="dial"
					height={500}
					iconAdd={<div></div>}
					iconMinus={<div></div>}
					initCount={0}
					minCount={0}
					maxCount={59}
					preloadCount={8}
					renderMask={Mask => <Mask className="mask">Seconds</Mask>}
					onChange={seconds => setSecond(seconds)}
				/>

				<div id="play">
					<img src={playButton} alt="" onClick={() => launch()} />
				</div>
	    </div>

	    <div id="common-durations">
	    	<p className="quick-duration" onClick={() => quickLaunch(60)}>
	    		1m
	    	</p>
	    	<p className="quick-duration" onClick={() => quickLaunch(180)}>
	    		3m
	    	</p>
	    	<p className="quick-duration" onClick={() => quickLaunch(300)}>
	    		5m
	    	</p>
	    	<p className="quick-duration" onClick={() => quickLaunch(600)}>
	    		10m
	    	</p>
	    	<p className="quick-duration" onClick={() => quickLaunch(900)}>
	    		15m
	    	</p>
	    	<p className="quick-duration" onClick={() => quickLaunch(1800)}>
	    		30m
	    	</p>
	    	<p className="quick-duration" onClick={() => quickLaunch(3600)}>
	    		1h
	    	</p>
	    </div>

		<Menu visibility={visibility} onChangeMode={onChangeMode}></Menu>
    </div>
  );
}

export default CountdownMenu;
