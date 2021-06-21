import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <div className="wrap-nav">
      <section className="top-header">
        <img
          className="money-icon" alt="money-wheel"
          src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-09-512.png"
        ></img>
        <h3 className="title">Mula Money Budgeting App</h3>
      </section>
      <nav className="nav-class">
        <button className="buttons">
          <Link className="links" to="/transactions">
            Transactions
          </Link>
        </button>
        <button className="buttons">
          <Link className="links" to="/transactions/new">
            New Transaction
          </Link>
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
