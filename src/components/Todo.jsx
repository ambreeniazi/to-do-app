import React, { useState } from 'react'

function Todo() {
  const[Activity, setActivity]= useState("");
  const[listData, setlistData]= useState([]);
  
//   const [list,setList] = useState([{
//     id: "1",
//     task: "hello",
//     status: "pending"
//   },
//   {
//     id: "2",
//     task: "hello2",
//     status: "pending"
//   }
// ])

  // const items = [
  //   {id:'listData.length+1',
  //   status:'true',
  //   task: 'mytask'
  // },
  // ]
  // const newTodos=listData.slice();
  // newTodos.push(items);
  // listData(newTodos);
  // localStorage.setItem.JSON

  const AddActivity = () => {
    // for asynchronous
    // setlistData([...listData, Activity])
    //   console.log(listData)
  
      setlistData((listData)=>{
        if (Activity === "" ) {
          alert("You can not add empty task");
        }else {
          const updatedList=[...listData, Activity]
             setActivity(" ");
            // console.log(updatedList)
             return updatedList;
        }
  })}

   function DeleteActivity(index){
    const updatedList = listData.filter((elem,id)=>{
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
     <h1 className='heading'>Filters</h1>
     <input type="text" placeholder ='Addactivity'
      value={Activity} onChange={(e)=>setActivity
      (e.target.value)}/>
      <button onClick={AddActivity}>Add</button>
      {listData != []  && Activity !== "" && listData.map((data, index)=>{
        return(
        <>
          <p  key={index}> 
          {/* <div className="listData"> */}
          <div className="listData">{data}</div>
          <div> <button className="btn" onClick={()=>DeleteActivity(index)}>Delete</button></div>
          {/* </div> */}
         </p>
          </>
        )})}
        {/* {listData.length>=1 &&<button className="btn-position"  onClick={DeleteAll}>Delete All</button>} */}
        {/* <div>
             <button onClick={() => Showmessage()}>
            
            </button>
        </div> */}
        </div>
 </> )}


export default Todo;
