import React,{useState,useEffect} from "react";
import Todo from "./components/Todo";
//import Add from "./components/Add";
import axios, { Axios } from 'axios';
import './App.css';

function App() {
  
  //Short Cuts ==> useS
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {getData();}, []);


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

  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo
      key={i}
      task={taskObj}
      //deleteTodo={deleteTodo}
      //toggleTodo={toggleTodo}
    />
  ));


  return (
    <div className="App">
      <header className="App-header">
        
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
