import React, { useState } from 'react';
import "./login.css"    
const FormStructor = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  const toggleForm = () => {
    console.log("click");
    setLoginFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={`form-structor ${isLoginFormVisible ? 'slide-up' : ''}`}>
      <div className="signup">
        <h2 className="form-title" id="signup">
          Sign up
        </h2>
        <div className="form-holder">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button className="submit-btn">Sign up</button>
      </div>
      <div className={`login ${isLoginFormVisible ? 'slide-up' : ''}`}>
        <div className="center">
  { !isLoginFormVisible ?    <h2 className="form-title"  id="login">
            <button style={{border:"none",backgroundColor:"#fff"}} onClick={toggleForm}>or Sign up</button>
          </h2> :  <h2 className="form-title"  id="login">
            <button style={{border:"none",backgroundColor:"#fff"}} onClick={toggleForm}>or Log in</button>
          </h2> }
{ !isLoginFormVisible &&  <h2 className="form-title" id="signup" style={{color:"#000"}}>
          Log in
          </h2>}
          <div className="form-holder">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button  className="submit-btn">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default FormStructor;

// import "./login.css";
// import React from "react";
// export default function Login() {
//   console.clear();

//   const loginBtn = document.getElementById("login");
//   const signupBtn = document.getElementById("signup");

//   loginBtn.addEventListener("click", (e) => {
//     let parent = e.target.parentNode.parentNode;
//     const foundElement = Array.from(
//       e.target.parentNode.parentNode.classList
//     ).find((element) => {
//       return element !== "slide-up"; // Return a value based on the condition
//     });

//     if (foundElement) {
//       parent.classList.add("slide-up");
//     } else {
//       signupBtn.parentNode.classList.add("slide-up");
//       parent.classList.remove("slide-up");
//     }
//     // let parent = e.target.parentNode.parentNode;
//     // Array.from(e.target.parentNode.parentNode.classList).find((element) => {
//     //   if (element !== "slide-up") {
//     //     parent.classList.add("slide-up");
//     //   } else {
//     //     signupBtn.parentNode.classList.add("slide-up");
//     //     parent.classList.remove("slide-up");
//     //   }
//   });

//   signupBtn.addEventListener("click", (e) => {
//     let parent = e.target.parentNode;
//     const foundElement=Array.from(e.target.parentNode.classList).find((element) => {
//         return element !== "slide-up"; // Return a value based on the condition
//     });
//       if (foundElement) {
//         parent.classList.add("slide-up");
//       } else {
//         loginBtn.parentNode.parentNode.classList.add("slide-up");
//         parent.classList.remove("slide-up");
//       }
//     });

//   return (
//     <div class="form-structor">
//       <div class="signup">
//         <h2 class="form-title" id="signup">
//           <span>or</span>Sign up
//         </h2>
//         <div class="form-holder">
//           <input type="text" class="input" placeholder="Name" />
//           <input type="email" class="input" placeholder="Email" />
//           <input type="password" class="input" placeholder="Password" />
//         </div>
//         <button class="submit-btn">Sign up</button>
//       </div>
//       <div class="login slide-up">
//         <div class="center">
//           <h2 class="form-title" id="login">
//             <span>or</span>Log in
//           </h2>
//           <div class="form-holder">
//             <input type="email" class="input" placeholder="Email" />
//             <input type="password" class="input" placeholder="Password" />
//           </div>
//           <button class="submit-btn">Log in</button>
//         </div>
//       </div>
//     </div>
//   );
// }
