import { useState } from "react"


function App() {
 const [count,setcount] =useState(0); 
 const makeincrement = ()=>{
  setcount(count+1);
 }
 const reset = ()=>{
  setcount(0);
 }
 const makedecrement = ()=>{
  setcount(count-1);
 }
  return (
    <>
     <div className="box">
      <div>

<h2 className="title">Counter</h2>

      </div>




      <div className="box2">
      <div className="button" onClick={makeincrement}>increment</div>
      <div className="button" onClick={reset}>reset</div>
      <div className="button" onClick={makedecrement}>decrement</div>

      </div>
      <div className="reset">count:{count}</div>
     </div>
    </>
  )
}

export default App
