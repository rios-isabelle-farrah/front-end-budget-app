import { useState } from "react";
import { withRouter } from "react-router-dom";
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

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, sampleQuestionCheck: !transaction.sampleQuestionCheck });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction);
    history.push("/transactions");
  };

  return (
    <div className="New">
{/* - Displays a form with the following inputs and appropriate labels:
  - name (text)
  - name (text)
  - post (text)
  - sampleQuestionCheck (checkbox)
  - sampleQuestionCheck (number)
  - submit (submit) */}

<h1>New Transaction</h1>



      <form onSubmit={handleSubmit}>
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
        <label htmlFor="name">name:</label>
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
        {/* <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={transaction.post}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        /> */}
        <label htmlFor="sampleQuestionCheck">Add to Budget</label>
        <input
          id="sampleQuestionCheck"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={transaction.sampleQuestionCheck}
        />
        {/* <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={transaction.post}
          onChange={handleTextChange}
          placeholder="Describe why you transactioned this site"
        /> */}
          {/* <label htmlFor="sampleQuestionCheck">Days Since Last Crisis:</label>
        <input
          id="sampleQuestionCheck"
          type="number"
          name="sampleQuestionCheck"
          value={transaction.sampleQuestionCheck}
          placeholder="educational, inspirational, ..."
          onChange={handleNumChange}
        /> */}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(TransactionNew);