import React,{useState} from 'react'
import { BsFillCalendar2RangeFill } from "react-icons/bs";

export default function Add(props) {
    const [newTitle, setNewTitle] = useState('')

    const createNewTodo=()=>{  
       console.log("createNewTodo from ADD");
       // {"title":"task 5","isCompleted": false}
       props.createFunc({title: newTitle, isCompleted:false});
    }


    return (
        <div className="Add">

          <div className="s1">
            <BsFillCalendar2RangeFill size={34} color="rgb(63, 148, 179)"/>
        <input className="inp1"// لازم كل انبوت تكون مربوطه بستيت تخزن فيها القيمه 
          type="text"
          placeholder=" New Todo" 
          size="50"
          onChange={(e) => { // e كل تفاصيل الايفينت مخزنه فيه 
            setNewTitle(e.target.value);
          }}
        /></div>
        
        <br/>
        <button className="button1" onClick={createNewTodo}><span>Add New Todo</span></button>
      </div>
    )
}
