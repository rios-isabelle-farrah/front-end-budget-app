import { useState } from "react";
import { withRouter } from "react-router-dom";
import "./TransactionNew.css"
//import CurrencyInput from 'react-currency-input-field';


function TransactionNew({ addTransaction, history }) {
  const [transaction, setTransaction] = useState({
    date: '',
    name: "",
    amount: 0,
    sampleQuestionCheck:false
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  // const handleCheckboxChange = () => {
  //   setTransaction({ ...transaction, sampleQuestionCheck: !transaction.sampleQuestionCheck });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction);
    history.push("/transactions");
  };

  return (
    <div className="New">


<h1 className="new-title">New Transaction</h1>
      <form className="form-input" onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
        
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="transaction"
          required
        /><br></br>
        <br></br>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
        //   pattern="http[s]*://.+"
          required
          value={transaction.name}
          placeholder="transaction name"
          onChange={handleTextChange}
        />
<br></br><br></br>
         <label htmlFor="name">Amount:</label>
        <input
          id="amount"
          type="number"
          // pattern="http[s]*://.+"
          required
          value={transaction.amount}
          placeholder="transaction amount"
          onChange={handleNumChange}
        />
 {/* <label htmlFor="name">Amount:$</label> */}

{/* <CurrencyInput
  id="amount"
  name="amount"
  placeholder="Please enter amount"
  defaultValue={1000}
  decimalsLimit={2}
  onValueChange={(value, name) => console.log(value, name)}
/>; */}
        <br></br><br></br>
   
 
        <br />
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default withRouter(TransactionNew);