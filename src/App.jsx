import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Input from './components/input';
import Transaction from './components/transaction';
import { ExpenseProvider } from './context/context';

function App() {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Transaction />
              </>
            }
          />
          <Route
            path="/input"
            element={
              <>
                <Input />
                <Transaction />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  );
}

export default App;
