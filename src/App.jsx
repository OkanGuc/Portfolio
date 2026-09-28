import './App.css'
import Navbar from './sections/Navbar/Navbar';
import Contact from './sections/Contact/Contact';
import Perso from './sections/Perso/Perso';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer';
function App() {

  return  <>
  <Navbar/>
  <main>
    <Perso/>
    <Projects/>
    <Skills/>
    <Contact/>
  </main>
  <Footer/>
  </>
}

export default App;
