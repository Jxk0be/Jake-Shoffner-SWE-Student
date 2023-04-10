import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className='flex text-black'>
      <MobileNav />
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;
