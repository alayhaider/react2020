import React, { useContext } from 'react';
import {TransactionContext} from './transContext'


function Child() {

let transactions = useContext(TransactionContext);


/*let transactions = [

{amount: 500, desc: "Cash"},
{amount: -40, desc: "Book"},
{amount: -2000, desc: "Camera"},

]
*/

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h3>Your Balance<br />$260</h3>
      <duv className="expense-container">
      <h3>Income<br />$260</h3>
      <h3>Expense<br />$260</h3>

      </duv>

        <h1>History</h1><hr></hr>





<ul className="transaction-list">

{transactions.map((transobj,ind) =>{
return(<li>


    <span>{transobj.desc}</span>
    <span>{transobj.amount}</span>



</li>)

}
)}






</ul>

<h3>Add new transaction</h3>

<form className="Transaction_Form">
<lable>
    Enter Description<br />
    <input type="text" required />   
</lable>
<br/>

<lable>
    Enter Amount<br />
    <input type="number"  required/>   
</lable>


<input type="submit" value="Add Transaction"></input>

</form>

    </div>
  );
}

export default Child;
