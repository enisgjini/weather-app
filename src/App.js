import './App.css';
import Navbar from './components/Navbar';
import WeatherInfos from './components/WeatherInfos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br />

      <WeatherInfos/>
      {/* <Test/> */}
    </div>
  );
}

export default App;
