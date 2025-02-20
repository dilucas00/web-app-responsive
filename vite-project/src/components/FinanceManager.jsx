import React, { useState } from 'react';
import LineTable from './LineTable';
import AddHistoric from './AddHistoric';

function FinanceManager() {
  const [transactions, setTransactions] = useState([
    {
      category: "Mercado",
      date: "16-02-2025",
      value: -80,
      icon: "bx bxs-cart",
      color: "text-gray-300"
    },
    {
      category: "Transporte",
      date: "12-02-2025",
      value: -20,
      icon: "bx bxs-car",
      color: "text-gray-300"
    },
    {
      category: "Salário",
      date: "05-02-2025",
      value: 700,
      icon: "bx bx-money",
      color: "text-green-400"
    }
  ]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prev => {
      const updatedTransactions = [...prev];
      updatedTransactions.splice(prev.length - 1, 0, {
        ...newTransaction,
        value: parseFloat(newTransaction.value), 
        icon: getIconByCategory(newTransaction.category),
        color: newTransaction.category === "Salário" 
          ? "text-green-400" 
          : "text-gray-300"
      });
      return updatedTransactions;
    });
  };

  const getIconByCategory = (category) => ({
    "Mercado": "bx bxs-cart",
    "Transporte": "bx bxs-car",
    "Salário": "bx bx-money"
  })[category] || "bx bx-question-mark";

  return (
    <div className="min-h-screen bg-[#112942] p-4">
        <LineTable transactions={transactions} />
        <AddHistoric onAdd={handleAddTransaction} />
      
    </div>
  );
}

export default FinanceManager;