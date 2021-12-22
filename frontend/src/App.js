import React,{useState,useEffect} from "react";
import logo from './logo.svg';
import axios, { Axios } from 'axios';
import './App.css';

function App() {
  
  //Short Cuts ==> useS
  const [tasks, setTasks] = useState([])

  const getData = () => {
    // should bring data using axios
    // from backend (GET /tasks)
    axios
      .get(`http://localhost:5000/tasks`)
      .then((response) => {
        console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        // اخزن الرسبونس في استيت
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const mapOverTasks =tasks.map((taskObj,i)=>{
     return <p>{taskObj.title}</p>
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         app
        </p>
        <button onClick={getData}>GET DATA</button>
        {mapOverTasks}
      </header>
    </div>
  );
}

export default App;
