import { useNavigate } from 'react-router-dom';

function CustomizeSchedule({focusDuration, breakDuration}) {
	const navigate = useNavigate();
	const focusDurationDisplay = new Date(focusDuration * 1000)
      .toISOString()
      .slice(11, 19);
	const breakDurationDisplay = new Date(breakDuration * 1000)
      .toISOString()
      .slice(11, 19);

	function back(e) 
	{
		navigate('/schedule');

		e.stopPropagation();
	}

	function setFocus(e) 
	{
		navigate('/set-focus');

		e.stopPropagation();
	}

	function setBreak(e) 
	{
		navigate('/set-break');

		e.stopPropagation();
	}

	return (
		<div id="background">
			<table className="table center">
				<tr>
					<td>Focus Time</td>
					<td className="button" onClick={(e) => setFocus(e)}>{focusDurationDisplay}</td>
				</tr>
				<tr>
					<td>Break Time</td>
					<td className="button" onClick={(e) => setBreak(e)}>{breakDurationDisplay}</td>
				</tr>
				<tr>
					<td colspan="2" className="button" onClick={(e) => back(e)}>Back</td>
				</tr>
			</table>
		</div>
	);
}

export default CustomizeSchedule;
