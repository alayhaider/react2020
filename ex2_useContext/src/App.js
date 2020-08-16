import React,{useState} from 'react';
import Message from './Message';
import CounterContext from './CounterContext';

import './App.css';


function App() {



let[hh, setHH] = useState(0);
let[mm, setMM] = useState(0);
let[ss, setSS] = useState(0);

  return (
    <div>
      
      <CounterContext.Provider hh={hh} mm={mm} ss={ss} >
     <Message />     
     </CounterContext.Provider>

      <button onClick= {() =>setHH(hh+1)}>HH</button>     
      <button onClick= {() =>setMM(mm+1)}>HH</button>     
      <button onClick= {() =>setSS(ss+1)}>HH</button>     

         { /*isMorning ? 'Yes':'No' */}     

    </div>
  );
}

export default App;
