import logo from './logo.svg';
import './App.css';
import { Socials } from './components/social';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Andrew D'Aoust</h1>
        <p>Software engineer at FacilityConneX.  Motorsport enthusiast.</p>
      </header>
      <footer>
        <Socials />
      </footer>
    </div>
  );
}

export default App;
