import React,{useState} from 'react';
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
      <h1>React Hooks Forms</h1>
      

      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Async Submit Validation</h1>
      <label htmlFor="username">User Name</label>
      <input name="username" placeholder="Bill" ref={register} />

      <label htmlFor="lastName">Last Name</label>
      <input name="lastName" placeholder="Luo" ref={register} />

      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="bluebill1049@hotmail.com"
        type="text"
        ref={register}
      />

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
