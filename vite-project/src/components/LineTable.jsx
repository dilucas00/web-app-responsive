import React from 'react'

const LineTable = () => {
  return (
    <div className='flex w-auto h-80 justify-center items-center content-center flex-col bg-grey mt-7'>
        <div className='w-65 h-65 border flex flex-row '>
          <div className='w-8 h-8 rounded-lg bg-[#c5c5c4] m-3 flex justify-center'>
            <img src="/shopping-cart.svg" className='w-5' alt="" />
          </div>
          <div className='flex flex-col pt-1'>
            <h3 className='font-normal'>Mercado</h3>
            <p className='font-light text-xs '>16-02-2025</p>
          </div>
          <div className='flex flex-row justify-end items-center w-30 pt-2  h-10'>
            <span className='font-bold text-gray-700'>R$ 80,00</span>
          </div>
        </div>
    </div>
  )
}

export default LineTable
