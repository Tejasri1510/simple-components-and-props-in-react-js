import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import Student from "./Student";
import Button from "./Button";
// import { books }

// function BookList(){
//     return(
//         <>
//         </>
//     )
//}

// const Greeting=()=>{
//     return <h2>My First Component</h2>;
// };

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// export default Greeting;

// const Booklist=()=>{
//       return(
//           <div>
//            <ul type="none">
//               <li><h1>image placefolder</h1></li>
//               <li><h2>Book Title</h2></li>
//               <li><h3>Author</h3></li>
//            </ul>
//            <ul type="none">
//            <li><h1>image placefolder</h1></li>
//               <li><h2>Book Title</h2></li>
//               <li><h3>Author</h3></li>
//            </ul>
//            <ul type="none">
//            <li><h1>image placefolder</h1></li>
//               <li><h2>Book Title</h2></li>
//               <li><h3>Author</h3></li>
//            </ul>
//           </div>

//       );
// }

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Booklist />);

// export default Booklist;

/*one component in another

function Hello(){
   return <h2>Hello Everyone</h2>;
}

function Hi(){
   return(
   <>
    <h2>Hi Everyone</h2>
   <Hello />
   </>
   );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hi />);

export default Hi;
*/



// const Places=()=>{
//    return (

//    )
// }

// import React from 'react'

function Index(){
  return (
    <>
      <h1>Hello everyone</h1>
      <App></App>
      <Student  id="569"name="Devika" marks="80"/>
      <Student  id="570"name="Usha" marks="92"/>
      <Student  id="571"name="Mahi" marks="89"/>
      <Student  id="573"name="Suji" marks="86"/>
      <Student  id="576"name="Neeha" marks="95"/>
      <Student  id="580"name="Koti" marks="91"/>
      <Student  id="583"name="Prami" marks="88"/>
      <Student  id="584"name="Teja" marks="90"/>
      <Student  id="593"name="Moudi" marks="93"/>
      <Student  id="5o6"name="Navya" marks="95"/>
      <Button />
      <Button />
    </>
  );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

export default Index;









