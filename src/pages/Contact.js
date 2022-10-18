import NavBar from "../Components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Contact = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1>Contact:</h1>
        <input type="text"></input>
        <label>First Name: </label><br></br>
        <input type="text"></input>
        <label>Last Name: </label><br></br>
        <input type="text"></input>
        <label>Email: </label><br></br><br></br>
        
        <button onClick={() => {navigate("/")}}>
        Submit
        </button>
   </div>
  );
};

export default Contact;