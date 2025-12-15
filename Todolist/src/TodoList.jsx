import React, { useState } from 'react'
import './Todolist.css'
const TodoList = () => {
const [tasks,settasks] =useState([]);
 const [task,settask] = useState("");
const handleinputchange = (event) => {
 settask(event.target.value);
}
const addtask=()=>{

    if(task.trim()!==""){
settasks(t=>[...t,task]);
 settask("");
    }
 
}
const deletetask=(index)=>{
  
  const update = tasks.filter((_,i)=> i!==index     );
  settasks(update);


}

const uptask=(index)=>{
if(index >0){
    const update = [...tasks];
    [update[index],update[index-1]]=[update[index-1],update[index]];
    settasks(update);
}
}
const downtask=(index)=>{
if(index <tasks.length-1){
    const update = [...tasks];
    [update[index],update[index+1]]=[update[index+1],update[index]];
    settasks(update);
}
}

  return (
    <div className='to-do-list'>
     <h1>todolist</h1> 
    <div>
        <input type="text" placeholder='Enter the task' value={task} onChange={handleinputchange} />
        <button className='add-button' onClick={addtask}> add</button>
    </div>
    <div>
 <ol>
        {tasks.map((t,index)=>{
            return(
<li key={index}>
                <span>{t}</span>
                <button className='delete-button' onClick={()=>deletetask(index)}>delete</button>
                <button className='delete-button' onClick={()=>uptask(index)}>up</button>
                <button className='delete-button' onClick={()=>downtask(index)}>down</button>
            </li>
            );
            
        })  }
     </ol>
    </div>
    

    </div>
  )
}

export default TodoList
