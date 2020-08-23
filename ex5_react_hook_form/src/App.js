import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import './App.css';

function App() {

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

/*
Save data in local storage
  useEffect(() => {
    window.localStorage.setItem('counter', 'Pakistan')
    
  })
  <h1>{window.localStorage.getItem('counter')}</h1>


  
  fetch(`http://crewserver1.piac.com.pk/TMS/TMS.asmx/Login?pno=60987&password=piaffp`, { method: "GET"}).then(req => {
    return req.json();
  }).then(data => {
   setLoading(false)  
    setResults(data.name)
  })

*/

  


  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const { register, handleSubmit, errors  } = useForm();
  const onSubmit = async data => {
    await sleep(2000);

    

    //JSON.stringify(data)

//    if (data.username === "a") {
  //http://crewserver1.piac.com.pk/TMS/TMS.asmx/Login?pno=60987&password=p
      //alert(JSON.stringify(data));
  //  } else {
    //  alert("There is an error");
    //}
    

    fetch(`http://crewserver1.piac.com.pk/TMS/TMS.asmx/Login?pno=${data.pno}&password=${data.password}`, { method: "GET"}).then(req => {
    return req.json();
  }).then(data => {
   setLoading(false)  
    setResults(JSON.stringify(data))
  })



    









    
  };

  

  return (

  
    <div>
    

      <h1>Time Management System</h1>
      
      <h1>{results}</h1>
      <h1>{loading}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
      
      <h1>Employee Login</h1>
      
      <label htmlFor="pno">PNO</label>
      <input name="pno" placeholder="Enter Pno" ref={register} />

      <label htmlFor="password">Password</label>
      <input name="password" placeholder="Enter your Password" ref={register} />

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
