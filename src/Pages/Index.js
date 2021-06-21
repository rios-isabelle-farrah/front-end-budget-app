import Transactions from "../Components/Transactions";
import React from "react"

function Index({ transactions }) {
  return (
    <div className="Index">
      {/* <h2>Bank Total</h2> */}
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;