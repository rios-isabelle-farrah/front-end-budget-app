import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';


 import Edit from "./Pages/Edit";
// import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
 import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

import { apiURL } from './util/apiURL';
const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);
  
  const addTransaction = async (newTransaction) => {
    let res;
    try {
      res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions(prevTransactions => [...prevTransactions, res.data]);
    } catch (err) {
      console.log(err);
    }
  };


  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`);
      const dummyState = [...transactions];
      dummyState.splice(index, 1);
      setTransactions(dummyState);
    } catch (err) {
    }
  };

  const showTransaction = async (index) => {
    try {
      await axios.get(`${API}/transactions/${index}`);
      const dummyState = [...transactions];
      dummyState.splice(index, 1);
      setTransactions(dummyState);
    } catch (err) {
      console.log(err);
    }
  };


  const updateTransaction = async (updatedTransaction, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`, updatedTransaction);
      const newTransactions = [...transactions];
      newTransactions[index] = updatedTransaction;
      setTransactions(newTransactions);
    } catch (err) {
      console.log(err);
    }
  };


  const fetchTransactions = async () => {
    let res;
    try {
      res = await axios.get(`${API}/transactions`);
      //console.log(res.data)
      setTransactions(res.data);
    } catch(err) {
      console.log(err);
    }
  }
    
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/transactions">
              <Index transactions={transactions} />
            </Route>
            <Route path="/transactions/new">
              <New addTransaction={addTransaction} />
            </Route>
            <Route exact path="/transactions/:index">
              <Show deleteTransaction={deleteTransaction} show={showTransaction} transactions={transactions}/>
            </Route>
            <Route path="/transactions/:index/edit">
              <Edit updateTransaction={updateTransaction} />
            </Route>
            {/* <Route path="*"> */}
              {/* <FourOFour /> */}
            {/* </Route> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
