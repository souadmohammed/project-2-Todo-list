import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [username, setUsernam] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const register = (e) => {
    e.preventDefault(); // to prevent refresh
    console.log("register new user ");
    // {"title":"task 5","isCompleted": false}
    props.createFunc({ userName: username, password: password, email: email });
  };

  // ANOTHER SELOUTION ::
  //  const registerFunc = (e) => {
  //     e.preventDefault();
  //     console.log("reg");
  //     const newUser = {
  //       // ES6
  //       email,
  //       // "email": "email value in the state"
  //       password,
  //       username,
  //     };
  //     axios
  //       .post(`http://localhost:5000/users/register`, newUser)
  //       .then((response) => {
  //         console.log("DATA: ", response.data);
  //       })
  //       .catch((err) => {
  //         console.log("ERR: ", err);
  //       });
  //   };

  return (
    <div class="d-flex justify-content-center">
      <form class="row g-3 m-5" style={{marginLeft: "90px" ,marginRight: "90px" ,marginBottom: "5px"}}>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            User Name :
          </label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            placeholder="mohammed"
            size="50"
            onChange={(e) => {
              // e كل تفاصيل الايفينت مخزنه فيه
              setUsernam(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password :
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="12t3"
            onChange={(e) => {
              // e كل تفاصيل الايفينت مخزنه فيه
              setpassword(e.target.value);
            }}
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="inputAddress"
            placeholder="wq@hotmail.com"
            size="50"
            onChange={(e) => {
              // e كل تفاصيل الايفينت مخزنه فيه
              setemail(e.target.value);
            }}
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-outline-secondary" onClick={register}>
            Sign up
          </button>
          <Link className="link" to="/Login" style={{marginLeft: "30px"}}>
           Have An Account ?
      </Link>
        </div>
      </form>
      
    </div>
  );
}
