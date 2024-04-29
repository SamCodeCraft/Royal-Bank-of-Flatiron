import { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import Form from "./Components/Form";
import Table from "./Components/Table";
function App() {


  const arr = [
    {
      date: "20-Jan-2012",
      description: "Eco-Solutions LLC",
      category: "Lighting Components",
      amount: "ksh 45,000",
    },
    {
      date: "26-Apr-2020",
      description: "Luxe Living Interiors",
      category: "Marketing / Sponsorship",
      amount: "ksh 456,000",
    },
    {
      date: "12-Mar-2021",
      description: "Neon Dreams Studios",
      category: "Product Sales / Inventory",
      amount: "ksh 1,000,000",
    },
    {
      date: "11-jun-2021",
      description: "Urban Renewal Development",
      category: "Product Sales / Inventory",
      amount: "ksh 20,000",
    },
    {
      date: "04-April-2022",
      description: "Spark Electric Co.",
      category: "Service Revenue / Installation",
      amount: "ksh 75,000",
    },
    {
      date: "09-Sep-2023",
      description: "Prestige Events Planning",
      category: "Product Sales / Inventory",
      amount: "ksh 1,200,000",
    },
    {
      date: "24-Dec-2023",
      description: "Bright Futures Foundation",
      category: "Outsourced Services / Collaboration",
      amount: "ksh 234,000",
    }
  ]

  const [transactions, setTransactions] = useState(arr)

  return (
    <div className="container">
      <Search transactions={transactions} setTransactions = {setTransactions} arr = {arr} />
      <Form transactions={transactions} setTransactions={setTransactions}/>
      <Table transactions={transactions} />
    </div>
  );
}

export default App;