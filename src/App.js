import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './Container/Home';
import { About } from './Container/About';
import { Contact } from './Container/Contact';
import { Portifolio } from './Container/Portifolio';
import { Skill } from './Container/Skill';
import { Resume } from './Container/Resume';
import { Navbar } from './Components/Navbar';
import Particle from './Utills/Particle';
function App() {
  const location = useLocation()
  console.log(location)

  const particlehomepge = location.pathname === '/';
  return (
    <div className="App">
      {
        particlehomepge && <Particle/>
      }
      <Navbar />
      <div className='app_main_page'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portifolio' element={<Portifolio />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
