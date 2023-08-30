import { useNavigate } from 'react-router-dom';

function Customize({visibility}) {
  const navigate = useNavigate();
  let visibilityStyling = visibility;

  function customize(e) 
  {
    navigate('/customize-schedule');

    e.stopPropagation();
  }

  return (
    <div id="customize-menu" style={visibilityStyling}>
    	<div id="custom-button" onClick={(e) => customize(e)}>Custom</div>
    </div>
  );
}

export default Customize;
