import React,{useState} from 'react';
import Message from './Message';


import './App.css';

const names = ['James', 'Paul', 'John', 'George', 'Ringo'];


function App() {


  
let[count, setCount] = useState(10);
let[namelist, AddToList] = useState(['James', 'Paul']);

  return (
    <div>
      <h1>React’s State Management  </h1>
      <p>This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this. state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
</p>
      <h3>useState, setState</h3>
      
     <Message count={count}/>     
     

      <button onClick=
      {
        () =>setCount(count+1)
      }>
        Update Counter       
      </button>     

         { /*isMorning ? 'Yes':'No' */}     



         <div>

        <h1>To Do using setState</h1>


      <input type="text" name="txtName"></input>
        <button onClick=
      {
        () =>AddToList(          
          namelist.push('test')
        )
      }>
        Add to list  
      </button>     

      {namelist.map(name => (
        <li>
          {name}
        </li>
      ))}
    </div>



    </div>
  );
}

export default App;
