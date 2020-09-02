import React,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";


import './App.css';




function App() {
  
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const { register, handleSubmit, errors, formState } = useForm();
  const onSubmit = async data => {
    await sleep(2000);
    if (data.username === "bill") {
      alert(JSON.stringify(data));
    } else {
      alert("There is an error");
    }
  };

  

  return (
    <div>
      <h1>TMS Login</h1>
      

      <form onSubmit={handleSubmit(onSubmit)}>
      
      <h1>Please enter your PNO and the password for login TMS Website</h1>
      
      <label htmlFor="username">Pno</label>
      <input name="username" placeholder="Bill" ref={register} />

      <label htmlFor="lastName">Password</label>
      <input name="lastName" placeholder="Luo" ref={register} />

      

      <div style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
      </div>
      <input type="submit" />
    </form>




    </div>
  );
}

export default App;
