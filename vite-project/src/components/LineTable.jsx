import React from 'react'
import "boxicons/css/boxicons.min.css";

const LineTable = () => {
  return (
    <div className='flex w-auto h-80 justify-center items-center content-center flex-col bg-grey mt-7'>
      
        <h3 className='mr-32 mb-3 font-medium text-2xl'>Historico</h3>
      
      {/* CONTAINER MERCADO */}

        <div className=' flex flex-row border-b border-gray-300 p-1 '>
          <div className='w-8 h-8 rounded-lg bg-[#c5c5c4] m-3 flex justify-center'>
            <i class='bx bxs-cart bx-sm pt-1'></i>
          </div>
          <div className='flex flex-col pt-1'>
            <h3 className='font-normal'>Mercado</h3>
            <p className='font-light text-xs '>16-02-2025</p>
          </div>
          <div className='flex flex-row justify-end items-center w-32 pt-2  h-10'>
            <span className='font-bold text-red-700'>R$ -80,00</span>
          </div>
        </div>

        {/* CONTAINER Transporte  */}

        <div className=' flex flex-row border-b border-gray-300 pl-1 mt-3 '>
          <div className='w-8 h-8 rounded-lg bg-[#c5c5c4] m-3 flex justify-center'>
            <i class='bx bxs-car bx-sm pt-1'></i>
          </div>
          <div className='flex flex-col pt-1'>
            <h3 className='font-normal'>Transporte</h3>
            <p className='font-light text-xs '>12-02-2025</p>
          </div>
          <div className='flex flex-row justify-end items-center w-30 pt-2  h-10'>
            <span className='font-bold text-red-700'>R$ -20,00</span>
          </div>
          
        </div>

        {/* CONTAINER SALARIO */}

        <div className=' flex flex-row border-b border-gray-300 pl-2 mt-3 '>
          <div className='w-8 h-8 rounded-lg bg-[#c5c5c4] m-3 flex justify-center'>
            <i class='bx bx-money bx-sm pt-1'></i>
          </div>
          <div className='flex flex-col pt-1'>
            <h3 className='font-normal'>Salário</h3>
            <p className='font-light text-xs '>05-02-2025</p>
          </div>
          <div className='flex flex-row justify-end items-center w-35 pt-2  h-10'>
            <span className='font-bold text-green-700'>R$ 700,00</span>
          </div>
          
        </div>

    </div>
  )
}

export default LineTable
