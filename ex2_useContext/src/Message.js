import React, { useContext }  from 'react';
import CounterContext from './CounterContext';

function Message() {


let counterContext = useContext(CounterContext);
  

  return (
    <div >
      <h1><font color="green"> {counterContext}</font></h1>   


      
      
    </div>
  );
}

export default Message;
