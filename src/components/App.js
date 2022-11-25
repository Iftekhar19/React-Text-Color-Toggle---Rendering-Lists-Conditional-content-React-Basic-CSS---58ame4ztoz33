import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [active,setActive]=useState(true);
  return (
    <div id="main">
      
     <p className={active?"redColor":"blueColor"}>Newton School</p>

      <button id='button' onClick={()=>setActive(!active)}>Change Style</button>
    </div>
  )
}


export default App;
