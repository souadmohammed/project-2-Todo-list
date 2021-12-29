import React , { useState }from 'react'


export default function Register(props) {
    const [username, setUsernam] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    const register=(e)=>{  
        e.preventDefault(); // to prevent refresh
        console.log("register new user ");
        // {"title":"task 5","isCompleted": false}
        props.createFunc({userName: username, password:password,email:email});
     }


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
        <div><form action="">
        <label htmlFor="UserName">User Name : </label>       
        <input className="inp1" type="text" placeholder="mohammed"  size="50" onChange={(e) => { // e كل تفاصيل الايفينت مخزنه فيه 
            setUsernam(e.target.value);
          }}/>
        <br/>
        <br/>
        <br/>
        <label htmlFor="password">password : </label>
         <input className="inp1" type="password" placeholder="12t3"  size="50" onChange={(e) => { // e كل تفاصيل الايفينت مخزنه فيه 
            setpassword(e.target.value);
          }}/>
        <br/>
        <br/>
        <br/>
        <label htmlFor="email">Email : </label>
         <input className="inp1" type="email" placeholder="wq@hotmail.com"  size="50" onChange={(e) => { // e كل تفاصيل الايفينت مخزنه فيه 
            setemail(e.target.value);
          }}/>
        <br/>
        <br/>
        <br/>
        <button class="button" onClick={register}>register</button>
        </form>
        </div>
    )
}
