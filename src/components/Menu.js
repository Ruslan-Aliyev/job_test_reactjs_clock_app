import timer from '../images/timer.jpg';
import countdown from '../images/countdown.jpg';
import schedule from '../images/schedule.jpg';
import { useNavigate } from 'react-router-dom';

function Menu({visibility, onChangeMode}) {
  const navigate = useNavigate();
  let visibilityStyling = visibility;

  function changeMode(haveSeconds) 
  {
    navigate("/");
    onChangeMode(haveSeconds);
  }

  return (
    <div id="menu" style={visibilityStyling}>
      <div className="menu-item center-text" onClick={() => changeMode(0)}>14:48</div>
      <div className="menu-item center-text" onClick={() => changeMode(1)}>14:48:23</div>
      <div className="menu-item center-text" onClick={() => navigate("/timer")}>
        <img src={timer} alt="" />
      </div>
      <div className="menu-item center-text" onClick={() => navigate("/countdown-menu")}>
        <img src={countdown} alt="" />
      </div>
      <div className="menu-item center-text" onClick={() => navigate("/schedule")}>
        <img src={schedule} alt="" />
      </div>
    </div>
  );
}


export default Menu;
