import { useContext } from "react";
import { Link } from "react-router-dom";
import { ExpenseContext } from "../context/context";

function Header() {
  const { moneyList } = useContext(ExpenseContext);
  const totalBalance = moneyList.reduce((acc, item) => {
    return item.type === "income" ? acc + parseFloat(item.amount) : acc - parseFloat(item.amount);
  }, 0);

  return (
    <div className="flex justify-center">
      <div className="w-50% h-auto">
        <div className="text-3xl font-bold mt-5">Expense Tracker</div>
        <div className="flex justify-between">
          <div className="text-xl font-semibold mt-5"> Balance: {totalBalance} </div>
          <div className="mt-5 px-1 py-1 bg-slate-700 rounded-md text-white">
            <Link to="/input"> Add</Link>
          </div>
        </div>
        <div className="flex justify-between mt-5 gap-3 ">
          <div className="border-2 border-black w-32 px-9 rounded-md font-medium border-gray-400">
            Expense
            <div className="font-bold mt-2 text-red-400">
              ${moneyList.filter(item => item.type === "expense").reduce((acc, item) => acc + parseFloat(item.amount), 0)}
            </div>
          </div>
          <div className="border-2 border-gray-400 w-32 px-9 rounded-md font-medium">
            Income
            <div className="font-bold mt-2 text-green-400">
              ${moneyList.filter(item => item.type === "income").reduce((acc, item) => acc + parseFloat(item.amount), 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
