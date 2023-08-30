import { useState, useEffect } from "react";
import Picker from 'react-simple-picker';
import { useNavigate } from 'react-router-dom';

function SetBreak({setBreakDuration}) {
	const navigate = useNavigate();
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(5);
	const [second, setSecond] = useState(0);

	function back(e)
	{
    	navigate('/customize-schedule');

		e.stopPropagation();
	}

	function save(e)
	{
	  	let duration = (hour * 3600) + (minute * 60) + second;
	  	setBreakDuration(duration);
    	navigate('/customize-schedule');
  	
		e.stopPropagation();
	}

	return (
		<div id="background">
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
		    </div>

			<div className="nav-bar">
				<div id="back" onClick={(e) => back(e)}>
					<p>Back</p>
				</div>
				<div id="save" onClick={(e) => save(e)}>
					<p>Save</p>
				</div>
			</div>
		</div>
	);
}

export default SetBreak;
