import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [active,setActive]=useState(true);
const [className,setClassName]=useState('redColor');
 useEffect(()=>
 {
  if(active)
  {
    setClassName("redColor");
  }
  if(!active)
  {
    setClassName("blueColor");
  }
 },[active])
  return (
    <div id="main">
      
     <p className={className}>Newton School</p>

      <button id='button' onClick={()=>setActive(!active)}>Change Style</button>
    </div>
  )
}


export default App;
