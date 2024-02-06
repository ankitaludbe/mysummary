import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Project';
import Experience from './components/Experience';
import Skills from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Experience/>
    {/* <About/> */}
    <Projects/>
    {/* <Blog/> */}
    <Contact/>
    
    </>
  );
}

export default App;
