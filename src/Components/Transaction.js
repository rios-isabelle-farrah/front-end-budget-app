import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
      <section>
    {/* // <tr>
    //   <td> */}
        {transaction.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
  <br></br>
    Date: {transaction.date}
    <br></br>
     Name: {transaction.name}
     <br></br>
    Amount: {transaction.amount}
    <br></br>
 
    </section>
  );
}

export default Transaction;

// - A list of transactions that have a date, a name, and an amount
// - An account total somewhere near the top