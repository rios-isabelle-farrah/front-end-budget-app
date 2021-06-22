// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams, Link, useHistory } from "react-router-dom";

// import { apiURL } from '../util/apiURL';
// const API = apiURL();


// // date: '00/00/00',
// // name: "rent",
// // amount: 0,
// // sampleQuestionCheck:false

// function TransactionEdit(props) {
//   let { index } = useParams();
//   let history = useHistory();

//   const [transaction, setTransaction] = useState({
//     date: "",
//     name: "",
//     amount: 0,
//     sampleQuestionCheck:false
//   });

//   const handleTextChange = (event) => {
//     setTransaction({ ...transaction, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setTransaction({ ...transaction, sampleQuestionCheck: !transaction.sampleQuestionCheck });
//   };

//   const fetchTransaction = async () => {
//     try {
//       const res = await axios.get(`${API}/transactions/${index}`);
//       setTransaction(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   const handleNumChange = (event) => {
//     setTransaction({ ...transaction, [event.target.id]: event.target.value });
//   };
  
//   useEffect(() => {
//    fetchTransaction();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await props.updateTransaction(transaction, index);
//     history.push(`/transactions/${index}`);
//   };

//   return (
//     <div className="Edit">
// {/* - Displays a form with the following inputs and appropriate labels:
//   - date (text)
//   - name (text)
//   - amount (text)
//   - sampleQuestionCheckToday (checkbox)
//   - daysSinceLastCrisis (number)
//   - submit (submit) */}

// <h1>transaction</h1>



//       <form onSubmit={handleSubmit}>
//         <label htmlFor="date">Date:</label>
//         <input
//           id="date"
//           value={transaction.date}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="transaction"
//           required
//         />
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           type="text"
//         //   pattern="http[s]*://.+"
//           required
//           value={transaction.name}
//           placeholder="transaction name"
//           onChange={handleTextChange}
//         />
//         {/* <label htmlFor="amount">amount:</label>
//         <input
//           id="amount"
//           type="text"
//           name="amount"
//           value={transaction.amount}
//           placeholder="educational, inspirational, ..."
//           onChange={handleTextChange}
//         /> */}
  
//         <label htmlFor="amount">amount:</label>
//         <textarea
//           id="amount"
//           name="amount"
//           value={transaction.amount}
//           onChange={handleTextChange}
//           placeholder="Describe why you transactioned this site"
//         />
//           <label htmlFor="amount">The Amount:</label>
//         <input
//           id="amount"
//           type="number"
//           name="amount"
//           value={transaction.amount}
//           placeholder="dolllar amount"
//           onChange={handleNumChange}
//         />
//               <label htmlFor="sampleQuestionCheckToday">Save Changes?</label>
//         <input
//           id="sampleQuestionCheckToday"
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           checked={transaction.sampleQuestionCheck}
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default TransactionEdit;