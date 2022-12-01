// import React, {useEffect, useState} from 'react'
// import '../styles/App.css';

// const App = () => {
// //code here 
// const [active,setActive]=useState(true);
// const [className,setClassName]=useState('redColor');
//  useEffect(()=>
//  {
//   if(active)
//   {
//     setClassName("redColor");
//   }
//   if(!active)
//   {
//     setClassName("blueColor");
//   }
//  },[active])
//  const onButtonClick=()=>{

//   setActive(!active);
  
//   }
//   return (
//     <div id="main">
      
//      <p className={className}>Newton School</p>

//       <button id='button' onClick={onButtonClick}>Change Style</button>
//     </div>
//   )
// }


// export default App;


import React, {useEffect, useState} from 'react'

import '../styles/App.css';

const App = () => {

const [value,setValue]=useState(true)

const [className,setClassName]=useState('redColor')

const onButtonClick=()=>{

setValue(!value);

}

useEffect(()=>{

if(value){

setClassName('redColor')

}

if(!value){

setClassName('blueColor')

}

},[value])

return (

<div id="main">

<p className={className} >Newton School</p>

<button id='button' onClick={onButtonClick}>Change Style</button>

</div>

)

}

export default App;
