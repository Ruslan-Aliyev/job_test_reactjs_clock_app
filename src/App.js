import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Time from './pages/Time';
import Timer from './pages/Timer';
import Countdown from './pages/Countdown';
import Schedule from './pages/Schedule';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Time />} />
        <Route path='timer' element={<Timer />} />
        <Route path='countdown' element={<Countdown />} />
        <Route path='schedule' element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
