import TransactionDetails from "../Components/TransactionDetails";

function Show({ deleteTransaction ,transactions, show }) {
  return (
    <div className="Show">
      <h1>Show</h1>
      <h2>Transaction</h2>

      <section>
        <TransactionDetails
          deleteTransaction={deleteTransaction} allTransactions={transactions} show={show}
        />
      </section>
    </div>
  );
}

export default Show;