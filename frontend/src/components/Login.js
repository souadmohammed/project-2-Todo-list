import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [email, setemail] = useState("q@q.com");
  const [password, setpassword] = useState("123");

  const loginFunc = (e) => {
    e.preventDefault();
    console.log("login");
    const userInfo = {
      // ES6
      email,
      // "email": "email value in the state"
      password,
    };
    axios
      .post(`http://localhost:5000/users/login`, userInfo)
      .then((response) => {
        console.log("DATA: ", response.data);
        props.setisLoggedIn(true);
        props.setusername(response.data.UserName);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  return (
    <div>
      <form action="">
        <label htmlFor="email">Email : </label>
        <input
          class="form-control"
          type="email"
          placeholder="wq@hotmail.com"
          size="50"
          onChange={(e) => {
            // e كل تفاصيل الايفينت مخزنه فيه
            setemail(e.target.value);
          }}
          value={email}
        />
       
        <br />

        <label htmlFor="password">password : </label>
        <input
          class="form-control"
          type="password"
          placeholder="12t3"
          size="50"
          onChange={(e) => {
            // e كل تفاصيل الايفينت مخزنه فيه
            setpassword(e.target.value);
          }}
          value={password}
        />

        <br />
        
        <button class="btn btn-outline-secondary" onClick={loginFunc}>
          Login
        </button>  <Link className="link" style={{marginLeft: "30px"}} to="/Register">
        Don't Have An Account?
      </Link>
      </form>
      
    
    </div>
  );
}
