import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [active,setActive]=useState(true);
const handleChange=()=>
{
  setActive(!active);
}
  return (
    <div id="main">
      {
        active ?<p className="redColor">Newton School</p>:<p className="blueColor">Newton School</p>
}
      <button id='button' onClick={handleChange}>Change Style</button>
    </div>
  )
}


export default App;
