import React, {useState, useReducer} from 'react';
import Child from './Child';
import './App.css';

function reducer(state, action){
  return {count: state.count +1}
}

function App() {
  const[state, dispatch] = useReducer(reducer, {count: 0})
  
  const [count, setCount] = useState(0)

function increment()
{
setCount(count+1)
}


function incrementUsingReducer()
{
 dispatch()
}



function decrement()
{
setCount(count-1)
}



  return (
    <div className="App">
      <Child />
      <hr />

      <h1>Change counter value using useState</h1>
      <center >

      <button onClick={increment}>+</button>
      {count}      
      <button onClick={decrement}>-</button>
      </center>


<hr />

<h1>Change counter value useReducer</h1>
<button onClick={incrementUsingReducer}>+</button>
    </div>
  );
}

export default App;
