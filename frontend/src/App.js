import React,{useState,useEffect} from "react";
import Todo from "./components/Todo";
import Add from "./components/Add";
import Register from "./components/Register";
import Login from "./components/Login";
import axios, { Axios } from 'axios';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
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

  const deleteCTasks = () => {
    axios
      .delete(`http://localhost:5000/tasks`)
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

  const deleteTasks = () => {
    axios
      .delete(`http://localhost:5000/deleteTasks`)
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

  const filterData = (status) => {
    // should bring data using axios
    // from backend (GET /tasks)
    axios
      .get(`http://localhost:5000/filter?isCompleted=${status}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };


  const mapOverTasks = tasks.map((taskObj, i) => (
    //عشان اذا انحذف عنصر يجي الي بعده ياخذ الاي دي حقته --- الحل استخدام الايدي حق الاوبجيكت 
    <Todo key={taskObj._id} task={taskObj}  deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
  ));


  //========================Users===========================

  const register = (body) => {
    axios
      .post(`http://localhost:5000/users/register`,body)
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

    //=======================================================

  return (
    <div className="App">
      <header className="App-header">

    <Routes>
      <Route path="/home" element={ <div className='Home'>
    <p className="p1">TodoInput</p>
      {/* click on button should bring all Data */}
      {/* <button onClick={getData}>GET TASKS</button> */}
      <br/>
      <Add createFunc={postNewTodo} />
      <br/>
      <p className="p2">TodoList</p>
      <div class="btn-group">
        <button class="button" id="b2" onClick={getData}>GET TASKS</button>
        <button class="button" id="b2" onClick={()=>{filterData(true) }}>GET DONE</button>
        <button class="button" id="b2" onClick={()=>{filterData(false) }}>GET PENDING </button>
      </div>
      <br/>
      <br/>
      <br/>

      {mapOverTasks}
      <br/>
      <br/>
      <div class="btn-group2">
      <button class="button" id="b11" onClick={deleteCTasks}>DELETE COMPLETED TASKS</button>
      <button class="button" onClick={deleteTasks}>DELETE ALL TASKS</button>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>

      
     

      <br/>
      <br/>
      </div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register createFunc={register}/>} />
    </Routes>

      {/* <Register  />
      <br/>
      <br/>
      <br/>
      <Login/> */}


 
      </header>
    </div>
  );
}

export default App;
