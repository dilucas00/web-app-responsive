import React from 'react';
import "boxicons/css/boxicons.min.css";

function LineTable  () {
  return (
    <div className="w-full max-w-2xl mx-auto mt-20 bg-gradient-custom rounded-xl
 p-4 shadow-2xl ">
      <h3 className="mb-3 font-bold text-2xl text-white font-sans ">Histórico</h3>

      {/* CONTAINER MERCADO */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 py-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-[#c5c5c4] flex justify-center items-center mr-3">
            <i className="bx bxs-cart bx-sm"></i>
          </div>
          <div>
            <h3 className="font-bold font-mono text-white">Mercado</h3>
            <p className="font-light text-xs font-mono text-white">16-02-2025</p>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-auto">
          <span className="font-bold text-gray-300 font-mono ">R$ -80,00</span>
        </div>
      </div>

      {/* CONTAINER TRANSPORTE */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 py-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-[#c5c5c4] flex justify-center items-center mr-3">
            <i className="bx bxs-car bx-sm"></i>
          </div>
          <div>
            <h3 className="font-bold font-mono text-white">Transporte</h3>
            <p className="font-light font-mono text-xs text-white">12-02-2025</p>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-auto">
          <span className="font-bold text-gray-300 font-mono ">R$ -20,00</span>
        </div>
      </div>

      {/* CONTAINER SALÁRIO */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-300 py-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-[#c5c5c4] flex justify-center items-center mr-3">
            <i className="bx bx-money bx-sm"></i>
          </div>
          <div>
            <h3 className="font-bold font-mono text-white">Salário</h3>
            <p className="font-light text-xs font-mono text-white">05-02-2025</p>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-auto">
          <span className="font-bold text-green-400 font-mono ">R$ 700,00</span>
        </div>
      </div>
    </div>
  );
};

export default LineTable;
