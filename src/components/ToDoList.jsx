import React, { useState } from 'react'


function ToDoList() {
  const[Activity, setActivity]= useState("");
  const[listData, setlistData]= useState([]);
  const[status, setStatus]=useState(['pending'])
  // const [filter,setFilter] = useState({
  //   pending: true,
  //   inProgress: true,
  //   done: true
  // });

  const AddActivity  =()  =>{
    // for asynchronous
    // setlistData([...listData, Activity])
    //   console.log(listData)
  if ( Activity=== ""){
    alert("can't be empty")
  }
    else
  {
        
          setlistData([...listData, { currentTask: Activity , currentStatus: status, taskId: Date.now() }])
            setActivity("");
            // console.log(updatedList)
        
  }}


   function DeleteActivity(index){
    const updatedList = listData.filter((elements, id)=>{
      return index!=id;})
      setlistData(updatedList);
    }
    function DeleteAll(){
      setlistData([])
    }

    

     return (
     <>
     <div className='container'>
     <h1 className='heading'>To-Do-List</h1>
     {/* <h1 className='heading'>Filters</h1> */}
     <p>Write Activity 
      here</p>
     {/* <p>
     <input type="checkbox" id="pending" name="pending" value={filter.pending} onChange={(e) => setFilter({...filter, pending: !filter.pending})} defaultChecked />
          <label for="pending">Pending</label>
          <input type="checkbox" id="inProgress" name="inProgress" value={filter.inProgress} onChange={(e) => setFilter({...filter, inProgress: !filter.inProgress})} defaultChecked />
          <label for="inProgress">In Progress</label>
          <input type="checkbox" id="done" name="done" value={filter.done} onChange={(e) => setFilter({...filter, done: !filter.done})} defaultChecked />
          <label for="done">Done</label>
     </p> */}
      <input type="text" placeholder ='Addactivity'
      value={Activity} maxLength={15} onChange={(e)=>setActivity
      (e.target.value)}/><div>
          <select className='select'onChange={(e) => setStatus(e.target.value)}>
            <option  value="Pending">Pending</option>
            <option value="In Progress">InProgress</option>
            <option value="Done">Done</option>
          </select>
      </div>
       <button className='Add-btn' onClick={AddActivity}>+</button>
       {listData!=0 && Activity!==0 && listData.map((data, index)=>{
        return(
        <>
          <p  key={index}> 
           <div className="listData">{data.currentTask}{"      "}{data.currentStatus}</div>
          <div><button className ="btn" onClick={()=>DeleteActivity(index)}>-</button></div>
         </p>
          </>
        )})}
        {listData.length>=1 && <button className="btn-position"  onClick={DeleteAll}>Delete All</button>}
        </div>
 </> )}
export default ToDoList;


