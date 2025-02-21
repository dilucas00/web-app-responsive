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
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.18 5 4.05 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
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
            <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
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