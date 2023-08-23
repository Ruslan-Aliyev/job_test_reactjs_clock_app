import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Time from './pages/Time';
import Timer from './pages/Timer';
import Countdown from './pages/Countdown';
import Schedule from './pages/Schedule';

function App() {
  const [displaySeconds, setDisplaySeconds] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Time displaySeconds={displaySeconds} setDisplaySeconds={setDisplaySeconds} />} />
        <Route path='timer' element={<Timer setDisplaySeconds={setDisplaySeconds} />} />
        <Route path='countdown' element={<Countdown setDisplaySeconds={setDisplaySeconds} />} />
        <Route path='schedule' element={<Schedule setDisplaySeconds={setDisplaySeconds} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
