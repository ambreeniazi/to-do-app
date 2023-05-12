import React from 'react'

function Todo() {
  return (
     <>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label class="form-check-label" for="flexCheckDefault">
      Pending
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label class="form-check-label" for="flexCheckDefault">
      Progress
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label class="form-check-label" for="flexCheckDefault">
      Done
    </label>
  </div>
 </> )
}

export default Todo;
