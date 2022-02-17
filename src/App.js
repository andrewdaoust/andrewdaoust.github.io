import logo from './logo.svg';
import me from './static/me.png';
import './App.css';
import { Socials } from './components/social';

function App() {
  let descriptions = ["Motorsport enthusiast."];
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={me}
          className="rounded-full w-2/6 p-4"
          alt="logo"
        />
        <h1 className="text-7xl pb-6">Andrew D'Aoust</h1>
        <p>Software engineer at FacilityConneX.</p>
      </header>
      <footer>
        <Socials />
      </footer>
    </div>
  );
}

export default App;
