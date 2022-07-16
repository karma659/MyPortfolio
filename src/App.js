import React,{useEffect} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {

  useEffect(() => {
   Aos.init(); 
  }, []);
    return (
   <div className="">
    <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
   </div>
    )
};
export default App;