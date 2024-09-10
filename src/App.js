import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [numero, setNumero] = useState(123);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Gabriel Fernando Rota.
        </p>
       <p>{numero}</p>
        <button onClick={() => setNumero(numero +1)}>Aumentar +1</button>

        <a


          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>
    </div>
  );
}

export default App;
