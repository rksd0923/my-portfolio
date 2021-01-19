import './App.css';
import MyNavbar from './components/MyNavbar'
import MyCarousel from './components/MyCarousel'
import TitleMessage from './components/TitleMessage'
import About from './pages/About'
import MySkills from './pages/MySkills';
import Projects from './components/Projects'


const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <About />
      <Projects />
      <MySkills />



    </div>
  );
}

export default App;
