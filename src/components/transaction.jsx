import { useContext } from "react";
import { ExpenseContext } from "../context/context";

function Transaction() {
  const { moneyList } = useContext(ExpenseContext);

  return (
    <div className="flex justify-center">
      <div>
        <div className="font-bold text-2xl">Transactions</div>
        <div className="flex flex-col mt-3 w-64 gap-3">
          <div className="mt-2 border-2 border-gray-500 rounded-lg outline-none p-1">
            <input type="text" placeholder="Search" />
          </div>
          {moneyList.map((item, index) => (
            <div
              key={index}
              className="mt-2 border-2 border-gray-500 rounded-lg outline-none p-1"
            >
              <input className="border-none" type="text" value={item.description} readOnly />
              ${item.amount} - {item.type}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transaction;
