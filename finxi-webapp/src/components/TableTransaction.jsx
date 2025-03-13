import React from 'react';
import "boxicons/css/boxicons.min.css";

function TableTransaction({ transactions }) {
  return (
    <div className="overflow-x-auto flex justify-center mt-6">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Categoria</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valor</th>
          </tr>
        </thead>
        
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {/* Ícone adicionado aqui */}
                  <i className={`${transaction.icon || 'bx bx-question-mark'} text-xl mr-3 ${transaction.color || 'text-gray-600'}`}></i>
                  <span className="text-sm text-gray-900">{transaction.category}</span>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.date}
              </td>
              <td className={`px-4 py-4 whitespace-nowrap text-sm font-semibold ${
                transaction.value >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                R$ {Math.abs(transaction.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableTransaction;