import logo from './logo.svg';
import './App.css';

function App() {

  const getData=()=>{

    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         app
        </p>
        <button onClick={getData}></button>
        
      </header>
    </div>
  );
}

export default App;
