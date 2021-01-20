import './App.css';
import MyNavbar from './components/MyNavbar'
import MyCarousel from './components/MyCarousel'
import TitleMessage from './components/TitleMessage'
import About from './pages/About'
import MySkills from './pages/MySkills';
import Projects from './components/Projects'
import Fade from "react-reveal/Fade";
import Contact from './components/Contact'
import Footer from './components/Footer'
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <div className="color-gradient">

        <About />


        <Projects />

        <MySkills />

        <Contact />



        <Footer />
      </div >



    </div >
  );
}

export default App;
