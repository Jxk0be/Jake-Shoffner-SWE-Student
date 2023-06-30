import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hero from './pages/Hero';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import MobileNav from './components/MobileNav';


function App() {
  return (
    <div className='text-[#F5EFED]'>
      <MobileNav />
      <div className='flex'>
        <Sidebar />
          <div className='w-full md:h-screen h-full flex justify-between items-center flex-col md:pb-0'>
          <Routes>
            <Route index element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
