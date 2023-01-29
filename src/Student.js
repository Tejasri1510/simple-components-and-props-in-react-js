import React from "react";

 function Student(props){
  console.log(props.name);
   return(
   <div style={{backgroundColor:"skyblue",margin:20}}>
   <h1>id:{props.id}</h1>
   <h1>name:{props.name}</h1>
   <h1>marks:{props.marks}</h1>
   </div>
   );
 }
 export default Student;


 
