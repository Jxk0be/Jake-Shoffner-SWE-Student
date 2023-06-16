import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MobileNav from './components/MobileNav';
import About from './components/About';

function App() {
  return (
    <div className='text-[#F5EFED]'>
      <MobileNav />

      <div className='flex'>
        <Sidebar />
        <Hero />
      </div>

      <About />
    </div>
  );
}

export default App;
