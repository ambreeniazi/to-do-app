import React, { useEffect, useState } from 'react'
import Todo from './components/Todo';

const App = () => {
  const [task ,settask] =useState( ' ');
  const [mytask, setmytask]= useState(' ');

//   useEffect(()=>{
     
//   })



//   function submit(){
//   const items = [
//     id ="mytask.length+1",
//     task= "mytask",
//     complete="false",
//     notified='false'
//   ]};
//   const newTodos = mytask.slice();
//   newTodos.push(items);
//   setmytask(newTodos);
//   localStorage.setItems("items",JSON.stringify(newTodos));
//   setmytask( ' ');
// }




  return (
    <>
    
    <h1>To-Do-App</h1>
    <p>Filter-Tasks</p>
    <div className=''><Todo/>
     <form className='#'>
    <input type='text'  id="Text1" className='text1' placeholder="Add Task"></input>
    <button type='submit' value="submit" className='submit' placeholder='Button'>Add</button>
     <span><p>  
        <select name="#" id="#" required>
            <option value="">--Select an option--</option>
            <option value="Pending">Pending</option>
            <option value="Progress">Progress</option>
            <option value="Done">Done</option>
        </select>
      </p></span>
      </form>
    </div>

    {/* < div id ="addtask" className=''/>
    {
      setmytask.length!=0 && mytask.map((items,index)
      => {
        return(
          < Todo items={items}
          key={index}
          index={index}
          remove={remove}
          checked={checked}/>)})}
         */}</>
      )

        }

export default App

