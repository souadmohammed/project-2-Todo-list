import React,{useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function Login(props) {
    const [email, setemail] = useState('q@q.com')
    const [password, setpassword] = useState('123')

    const loginFunc=(e)=>{
        e.preventDefault();
            console.log("login");
            const userInfo = {
              // ES6
              email,
              // "email": "email value in the state"
              password
            };
            axios
              .post(`http://localhost:5000/users/login`, userInfo)
              .then((response) => {
                console.log("DATA: ", response.data);
                props.setisLoggedIn(true)
                props.setusername(response.data.UserName)
                
              })
              .catch((err) => {
                console.log("ERR: ", err);
              });
    }
    return (
        <div>
      <form action="">

       

        <label htmlFor="email">Email : </label>
         <input className="inp1" type="email" placeholder="wq@hotmail.com"  size="50" onChange={(e) => { // e كل تفاصيل الايفينت مخزنه فيه 
            setemail(e.target.value);
          }} value={email}/>
        <br/>
        <br/>
        <br/>

        <label htmlFor="password">password : </label>
         <input className="inp1" type="password" placeholder="12t3"  size="50" onChange={(e) => { // e كل تفاصيل الايفينت مخزنه فيه 
            setpassword(e.target.value); 
          }} value={password}/>

        <br/>
        <br/>
        <br/>
        <button class="button" onClick={loginFunc}>Login</button>
        <button class="button" >Don't Have An Account</button>
        </form>
        <Link to="/Register">Don't Have An Account</Link>
        </div>
    )
}
