import { createContext, useState } from "react";

// Create the context
export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [inputAmount, setInputAmount] = useState("");
  const [Moneyref, setMoneyRef] = useState("");
  const [transactionType, setTransactiontype] = useState("expense");
  const [moneyList, setmoneyList] = useState([]);
  const [data, setData] = useState([]);

  const AddTransaction = () => {
    if (inputAmount && Moneyref) {
      setmoneyList((prevList) => [
        ...prevList,
        { amount: inputAmount, description: Moneyref, type: transactionType },
      ]);
      setInputAmount("");
      setMoneyRef("");
    }
  };

  return (
    <ExpenseContext.Provider
      value={{
        inputAmount,
        Moneyref,
        setInputAmount,
        setMoneyRef,
        setmoneyList,
        transactionType,
        setTransactiontype,
        AddTransaction,
        data,
        moneyList,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
