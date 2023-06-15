import React,{useEffect} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';

function App() {

  useEffect(() => {
   Aos.init(); 
  }, []);
    return (
   <div className="">
    <Navbar/>
     <Home/>
     <About/>
     <Work/>
     <Skills/>
     <Projects/>
   </div>
    )
};
export default App;