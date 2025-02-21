import React, { useState } from 'react';
import TableTransaction from './TableTransaction';
import AddTransaction from './AddTransaction';

function FinanceManager() {
  const [transactions, setTransactions] = useState([
    {
      category: "Mercado",
      date: "16-02-2025",
      value: -80,
      icon: "bx bxs-cart",
      color: "text-gray"
    },
    {
      category: "Transporte",
      date: "12-02-2025",
      value: -20,
      icon: "bx bxs-car",
      color: "text-green"
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
          : "text-black-400"
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
    <div className="min-h-screen  bg-white shadow-2xl p-4">
        <TableTransaction transactions={transactions} />
        <AddTransaction onAdd={handleAddTransaction} />
    </div>
  );
}

export default FinanceManager;