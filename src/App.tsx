import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";
import { TransactionsTable } from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}
