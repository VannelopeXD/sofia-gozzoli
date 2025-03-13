import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Hero/Projects/Projects';
import Skiils from './sections/Skills/Skiils';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skiils />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
