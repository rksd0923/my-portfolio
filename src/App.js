import './App.css';
import MyNavbar from './components/MyNavbar'
import MyCarousel from './components/MyCarousel'
import TitleMessage from './components/TitleMessage'
import About from './pages/About'
import Skills from './pages/Skills';
import Projects from './components/Projects'


const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <About />
      <Skills />
      <Projects />

    </div>
  );
}

export default App;
