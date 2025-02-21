import React from 'react';
import "boxicons/css/boxicons.min.css";

function TableTransaction({ transactions }) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-6 mb-5 rounded-2xl bg-white shadow-lg">
      <div className="px-6 py-5 border-b border-gray-100">
        <h3 className="text-xl font-semibold text-[#0F2A3D] font-oswald">
          Últimas Transações
        </h3>
      </div>

      <div className="divide-y divide-gray-100">
        {transactions.map((transaction, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            {/* Ícone e detalhes */}
            <div className="flex items-center space-x-4 flex-1">
              <div className={`w-12 h-12 rounded-xl flex justify-center items-center 
                ${transaction.value < 0 ? 'bg-red-100/80' : 'bg-emerald-100/80'}`}>
                <i className={`${transaction.icon} bx-sm ${
                  transaction.value < 0 ? 'text-red-600' : 'text-emerald-600'
                }`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 text-base">{transaction.category}</h3>
                <p className="text-xs text-gray-400 mt-1">{transaction.date}</p>
              </div>
            </div>

            {/* Valor da transação */}
            <div className="ml-4">
              <span className={`font-semibold text-lg font-mono ${
                transaction.value < 0 ? 'text-red-600' : 'text-emerald-600'
              }`}>
                {transaction.value < 0 ? '-' : '+'} R${' '}
                <span className="text-gray-800">
                  {Math.abs(transaction.value).toFixed(2)}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableTransaction;