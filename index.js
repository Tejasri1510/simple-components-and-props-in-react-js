import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import './App2.css';
import "./Birthday.css";
import {item} from "./Item"
import Birthday from "./Birthday"
//import App10 from"./App10";
 //import Appd from './Appd';
//import UseEffect1 from './UseEffect1';
function Index(){
 // const [myName,setMyName]=useState('Hello')
  //USESTATE
  // const val=myName;
  // console.log(val);
  // const changeName=()=>{
  //      (val==="Hello")? setMyName('Hi'): setMyName("Hello");
  // }
  // return (
    // <>
  //      <h1>Hello everyone</h1>
  //      <h2>{myName}</h2>
  //      <button onClick={changeName}>click me please</button>
  
  return (
    <>
     <h1>Birthday Alerts!!!</h1>
    <section className="remainders">
        {item.map((bir) => {
          return <Birthday {...bir} key={bir.id} />;
        })}
      </section>
       </>

  );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index/>);

export default Index;





