import TransactionNew from "../Components/TransactionNew";

function New({ addTransaction }) {
  return (
    <div className="New">
      <h2>New</h2>
      <TransactionNew addTransaction={addTransaction} />
    </div>
  );
}

export default New;