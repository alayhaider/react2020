import React,{useState} from 'react';
import CounterContext from './CounterContext';
import Message from './Message';




import './App.css';


function App() {


  
let[count, setCount] = useState(0);

  return (
    <div>
            
      <CounterContext.Provider value={count}>
     <Message />     
     </CounterContext.Provider>
    


     <button onClick=
      {
        () =>setCount(count+1)
      }>
        Update Counter       
      </button>     

  

         { /*isMorning ? 'Yes':'No' */}     

    </div>
  );
}

export default App;
