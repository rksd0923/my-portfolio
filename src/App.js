import './App.css';
import MyNavbar from './components/MyNavbar'
import MyCarousel from './components/MyCarousel'
import TitleMessage from './components/TitleMessage'


const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
}

export default App;
