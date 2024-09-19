import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ExpenseContext } from "../context/context";

function Input() {
  const {
    inputAmount,
    Moneyref,
    setInputAmount,
    setMoneyRef,
    transactionType,
    setTransactiontype,
    AddTransaction,
  } = useContext(ExpenseContext);

  const navigate = useNavigate();

  const handleAddTransaction = (e) => {
    e.preventDefault(); // Prevent default form behavior
    AddTransaction(); // Add the transaction
    navigate("/"); // Navigate to the home page after transaction is added
  };

  return (
    <div className="flex justify-center">
      <div className="w-50% h-auto w-60">
        <div className="text-3xl font-bold mt-5">Expense Tracker</div>
        <div className="flex justify-between">
          <div className="text-xl font-semibold mt-5"> Balance: $3000 </div>
        </div>
        <div className="border-2 border-zinc-400 rounded-md h-40 w-full">
          <div className="flex flex-col gap-2 text-sm font-medium mt-2 ml-3 mr-2">
            <input
              className="border rounded-md border-zinc-400"
              onChange={(e) => setInputAmount(e.target.value)}
              type="number"
              value={inputAmount}
              placeholder="Amount"
            />
            <input
              className="border rounded-md border-zinc-400"
              type="text"
              onChange={(e) => setMoneyRef(e.target.value)}
              value={Moneyref}
              placeholder="Description"
            />
          </div>
          <div className="flex gap-10 ml-2">
            <div className="flex items-center">
              <input
                id="radio1"
                type="radio"
                name="option"
                value="expense"
                checked={transactionType === "expense"}
                onChange={(e) => setTransactiontype(e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="radio1" className="ml-2 text-sm text-gray-700">Expense</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="radio2"
                type="radio"
                name="option"
                value="income"
                checked={transactionType === "income"}
                onChange={(e) => setTransactiontype(e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="radio2" className="ml-2 text-sm text-gray-700">Income</label>
            </div>
          </div>
          <div className="ml-9 mt-5">
            <button
              onClick={handleAddTransaction}
              className="px-3 py-2 bg-slate-800 rounded-md text-white"
            >
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
