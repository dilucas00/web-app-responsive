import React from 'react';
import "boxicons/css/boxicons.min.css";

function LineTable({ transactions }) {
  return (
    <div className="w-full bg-gradient-custom sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mt-20  rounded-xl p-4 shadow-2xl ">
      <h3 className="mb-3 font-bold text-2xl text-white font-oswald">Histórico</h3>

      {transactions.map((transaction, index) => (
      <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center py-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-[#c5c5c4] flex justify-center items-center mr-3">
            <i className={`${transaction.icon} bx-sm`}></i>
          </div>
          <div>
            <h3 className="font-bold font-montserrat text-white">{transaction.category}</h3>
            <p className="font-light text-xs font-montserrat text-white">{transaction.date}</p>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-auto">
          <span className={`${transaction.color} font-bold font-oswald`}>
            R$ {transaction.value.toFixed(2)} {/* Exibe o valor como foi salvo */}
          </span>
        </div>
      </div>
    ))}
    </div>
  );
}

export default LineTable;