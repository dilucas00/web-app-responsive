import React, { useState } from 'react';
import TableTransaction from './TableTransaction';
import AddTransaction from './AddTransaction';
import CardBalance from './CardBalance';

function FinanceManager() {
  const [transactions, setTransactions] = useState([
    {
      category: "Mercado",
      date: "16-02-2025",
      value: -80,
      icon: "bx bxs-cart",
      color: "white"
    },
    {
      category: "Transporte",
      date: "12-02-2025",
      value: -20,
      icon: "bx bxs-car",
      color: "text-green"
    },
   
  ]);

  // Calcula os totais
  const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.value, 0);
  const monthlyExpense = transactions
    .filter(transaction => transaction.value < 0)
    .reduce((acc, transaction) => acc + Math.abs(transaction.value), 0);

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prev => {
      const updatedTransactions = [...prev];
      updatedTransactions.splice(prev.length - 1, 0, {
        ...newTransaction,
        value: parseFloat(newTransaction.value),
        icon: newTransaction.icon, 
        color: newTransaction.category === "Salário" 
          ? "text-green-400" 
          : "text-gray-600" 
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
    <div className="min-h-screen bg-white p-4">
      <CardBalance 
        totalBalance={totalBalance} 
        monthlyExpense={monthlyExpense} 
      />
      <TableTransaction transactions={transactions} />
      <AddTransaction onAdd={handleAddTransaction} />
    </div>
  );
}

export default FinanceManager;