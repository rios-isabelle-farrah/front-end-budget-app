import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import "./Transactions.css";
function Transactions({ transactions }) {
  const [total, setTotal] = useState(0);

  const numbers = transactions.map((el) => el.amount);

  console.log(numbers);

  let sum = 0;

  const addAmount = () => {
    numbers.forEach((el) => {
      sum += Number(el);
      console.log(sum);
    });

   setTotal(sum)
  };

  useEffect(() => {
    addAmount();
  });


  return (
    <div className="Transactions">
      <section>
        <ul>
          <h1 className="title-total">Bank Total from Transactions: {total}</h1>
          <h2>{transactions.amount}</h2>

          <li className="transaction-entry">
            {transactions.map((transaction, index) => {
              return (
                <h3>
                  <Transaction
                    key={index}
                    transaction={transaction}
                    index={index}
                  />
                </h3>
              );
            })}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Transactions;

// - A list of transactions that have a date, a name, and an amount
// - An account total somewhere near the top
