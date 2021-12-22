import React,{useState,useEffect} from "react";
import Todo from "./components/Todo";
import Add from "./components/Add";
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


  const postNewTodo = (body) => {
    // console.log("func postNewTodo from APP");
    // {"title":"task 5","isCompleted": false}
    //ارسل الريكويست مع البدي 
    axios
      .post(`http://localhost:5000/tasks`, body)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        // setTasks(response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };



  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/id/${id}`)
      //     (`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const toggleTodo = (id, newStatus) => {
    axios
      .put(`http://localhost:5000/tasks/${id}/${newStatus}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };


  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo
      key={i}
      task={taskObj}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  ));


  return (
    <div className="App">
      <header className="App-header">
      <p>app</p>
      {/* click on button should bring all Data */}
      <button onClick={getData}>GET TASKS</button>
      <br/>
      <Add createFunc={postNewTodo} />
      <br/>
      {mapOverTasks}
      </header>
    </div>
  );
}

export default App;
