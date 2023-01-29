import React from "react";
import App1 from "./App1";
import App2 from "./App2";
import { useState} from "react";
function App(){
    const handleClick=()=>{
        console.log("clicked....");
        setCount(count+1);
     };
     const[count,setCount]=useState(0);
    return(
        <>
        <h1>This is App</h1>
        <App1></App1>
        <App2></App2>
        <button onClick={handleClick}>Clicked {count} times</button><br/>
        <button onClick={handleClick}>Clicked {count} times</button>
        </>
    );
}
export default App;


