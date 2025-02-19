import React from 'react';
import "boxicons/css/boxicons.min.css";

const LineTable = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-7 bg-gray-50 p-4">
      <h3 className="mb-3 font-medium text-2xl">Histórico</h3>

      {/* CONTAINER MERCADO */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-300 py-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-[#c5c5c4] flex justify-center items-center mr-3">
            <i className="bx bxs-cart bx-sm"></i>
          </div>
          <div>
            <h3 className="font-normal">Mercado</h3>
            <p className="font-light text-xs">16-02-2025</p>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-auto">
          <span className="font-bold text-red-700">R$ -80,00</span>
        </div>
      </div>

      {/* CONTAINER TRANSPORTE */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-300 py-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-[#c5c5c4] flex justify-center items-center mr-3">
            <i className="bx bxs-car bx-sm"></i>
          </div>
          <div>
            <h3 className="font-normal">Transporte</h3>
            <p className="font-light text-xs">12-02-2025</p>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-auto">
          <span className="font-bold text-red-700">R$ -20,00</span>
        </div>
      </div>

      {/* CONTAINER SALÁRIO */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-300 py-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-[#c5c5c4] flex justify-center items-center mr-3">
            <i className="bx bx-money bx-sm"></i>
          </div>
          <div>
            <h3 className="font-normal">Salário</h3>
            <p className="font-light text-xs">05-02-2025</p>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-auto">
          <span className="font-bold text-green-700">R$ 700,00</span>
        </div>
      </div>
    </div>
  );
};

export default LineTable;
