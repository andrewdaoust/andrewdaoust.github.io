import me from './static/me.png';
import './App.css';
import { Socials } from './components/social';

function App() {
  // let descriptions = ["Motorsport enthusiast."];
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-center p-4">
          <img
            src={me}
            className="rounded-full w-2/6 border-4 border-solid border-white"
            alt="logo"
          />
        </div>
        <h1 className="text-7xl pb-6">Andrew D'Aoust</h1>
        <p className="p-2">Software engineer at FacilityConneX.</p>
      </header>
      <footer>
        <Socials />
      </footer>
    </div>
  );
}

export default App;
