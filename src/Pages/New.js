import TransactionNew from "../Components/TransactionNew";

function New({ addTransaction }) {
  return (
    <div className="New">

      <TransactionNew addTransaction={addTransaction} />
    </div>
  );
}

export default New;