import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hero from './pages/Hero';
import About from './pages/About';
import MobileNav from './components/MobileNav';


function App() {
  return (
    <div className='text-[#F5EFED]'>
      <MobileNav />
      <div className='flex'>
        <Sidebar />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
