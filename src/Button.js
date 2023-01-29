import React from 'react'
import { useState} from "react";
const Button = () => {
    const handleClick=()=>{
        console.log("clicked....");
        setCount(count+1);
     };
     const[count,setCount]=useState(0);
  return (
    <div>
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  )
}

export default Button;
