import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Time from './pages/Time';
import Timer from './pages/Timer';
import Countdown from './pages/Countdown';
import CountdownMenu from './pages/CountdownMenu';
import Schedule from './pages/Schedule';
import CustomizeSchedule from './pages/CustomizeSchedule';
import SetFocus from './pages/SetFocus';
import SetBreak from './pages/SetBreak';

function App() {
  const [displaySeconds, setDisplaySeconds] = useState(0);
  const [countdownDuration, setCountdownDuration] = useState(0);
  const [focusDuration, setFocusDuration] = useState(1500);
  const [breakDuration, setBreakDuration] = useState(300);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Time displaySeconds={displaySeconds} setDisplaySeconds={setDisplaySeconds} />} />
        <Route path='timer' element={<Timer setDisplaySeconds={setDisplaySeconds} />} />
        <Route path='countdown' element={<Countdown setDisplaySeconds={setDisplaySeconds} countdownDuration={countdownDuration} />} />
        <Route path='countdown-menu' element={<CountdownMenu setDisplaySeconds={setDisplaySeconds} setCountdownDuration={setCountdownDuration} />} />
        <Route path='schedule' element={<Schedule setDisplaySeconds={setDisplaySeconds} focusDuration={focusDuration} breakDuration={breakDuration} />} />
        <Route path='customize-schedule' element={<CustomizeSchedule focusDuration={focusDuration} breakDuration={breakDuration} />} />
        <Route path='set-focus' element={<SetFocus setFocusDuration={setFocusDuration} />} />
        <Route path='set-break' element={<SetBreak setBreakDuration={setBreakDuration} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
