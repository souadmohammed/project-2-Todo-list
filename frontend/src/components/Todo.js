import React from 'react'
import { GoTrashcan } from "react-icons/go";

export default function Todo(props) {
    
    const { _id, title, isCompleted } = props.task;
    return (
        <div className="Todo">

          <span className="task" style={{ textDecoration: isCompleted ? "line-through" : "none" }}> 
             {title} </span>
             
         <input className="check" type="checkbox" defaultChecked={isCompleted} onClick={()=>{
             props.toggleTodo(_id,!isCompleted)
            }}/>

      {/* Delete button  */}
      <button className="b1" onClick={() => {props.deleteTodo(_id)}}><GoTrashcan size={23} color="rgb(63, 148, 179)"/></button>
        </div>
    )
}
