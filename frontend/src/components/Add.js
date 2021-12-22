import React,{useState} from 'react'

export default function Add(props) {
    const [newTitle, setNewTitle] = useState('')

    const createNewTodo=()=>{  
       console.log("createNewTodo from ADD");
       // {"title":"task 5","isCompleted": false}
       props.createFunc({title: newTitle, isCompleted:false});
    }


    return (
        <div className="Add">

        <input // لازم كل انبوت تكون مربوطه بستيت تخزن فيها القيمه 
          type="text"
          placeholder="Write new title here ..."
          onChange={(e) => { // e كل تفاصيل الايفينت مخزنه فيه 
            setNewTitle(e.target.value);
          }}
        />
        <button onClick={createNewTodo}>Create New Todo</button>
      </div>
    )
}
