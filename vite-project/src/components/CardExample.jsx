function CardExemplo() {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center bg-white border rounded-lg p-4 shadow-sm">
        {/* Saldo */}
        <div className="flex flex-col items-center m-2">
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-600 p-2 rounded-full">
              {/* Ícone de Saldo */}
            </span>
            <h3 className="font-semibold text-gray-700">Saldo</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">R$ 200,00</p>
        </div>
  
        {/* Divisor vertical (somente em telas grandes) */}
        <div className="hidden sm:block w-px h-16 bg-gray-200 mx-4"></div>
  
        {/* Gastos */}
        <div className="flex flex-col items-center m-2">
          <div className="flex items-center gap-2">
            <span className="bg-red-100 text-red-600 p-2 rounded-full">
              {/* Ícone de Gastos */}
            </span>
            <h3 className="font-semibold text-gray-700">Gastos</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">R$ -50,00</p>
        </div>
      </div>
    );
  }
  
  export default CardExemplo;
  