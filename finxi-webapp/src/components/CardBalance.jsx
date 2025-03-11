import React from 'react';

function CardBalance() {
  return (
    <div className="w-full h-80 p-2 mt-4">
      <div className="grid grid-cols-1 gap-3">
        {/* Card Saldo Disponível */}
        <div className="relative p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[99%] border border-gray-100">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[11px] font-medium uppercase text-gray-400 tracking-wide mb-1">
                Saldo Disponível
              </span>
              <div className="flex items-center space-x-1">
                <span className="text-lg font-bold text-emerald-600">R$</span>
                <span className="text-2xl font-extrabold text-gray-800">200,00</span>
              </div>
            </div>
          
          </div>
          <div className="mt-2 pt-2 border-t border-gray-50">
            <span className="text-xs text-gray-400">Disponível este mês</span>
          </div>
        </div>

        {/* Card Gasto Mensal */}
        <div className="relative p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[99%] border border-gray-100">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[11px] font-medium uppercase text-gray-400 tracking-wide mb-1">
                Gasto Mensal
              </span>
              <div className="flex items-center space-x-1">
                <span className="text-lg font-bold text-rose-500">- R$</span>
                <span className="text-2xl font-extrabold text-gray-800">50,00</span>
              </div>
            </div>
      
            
          </div>
          <div className="mt-2 pt-2 border-t border-gray-50">
            <span className="text-xs text-gray-400">Total gasto este mês</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBalance;