import React from 'react'
import "../Login.css"

function Login(){
    return(
       <div className='w-full h-full'>
        <div className='flex flex-col justify-center items-center content-center    '>
            <img src="/finxi-logo.png" className='w-60 h-60' alt="" />
        </div>
        <div>
            <div className='flex flex-col items-center gap-8'>
                <div className='flex items-center justify-center w-full'>
                    <h4 className='text-white text-2xl font-oswald'>Crie sua conta</h4>
                </div>
                <div className='flex flex-col'> 
                    <label htmlFor="" className='text-gray-200 text-sm'>Email</label>
                    <input placeholder='Digite seu email' className='bg-transparent border-1 rounded-b-sm border-gray-400 w-60 h-10 text-sm outline-none transition-all  text-red placeholder:text-gray-200 placeholder:font-extralight placeholder:text-xs font-montserrat  p-3'></input>
                </div>

                <div className='flex flex-col'> 
                    <label htmlFor="" className='text-gray-200 text-sm'>Senha</label>
                    <input placeholder='Digite sua senha' className='bg-transparent border-1 rounded-b-sm border-gray-400 w-60 h-10 text-sm outline-none transition-all  text-red placeholder:text-gray-700 placeholder:font-extralight placeholder:text-xs font-montserrat  p-3'></input>
                </div>

                <div className='flex flex-col'> 
                    <label htmlFor="" className='text-gray-200 text-sm'>Confirmar senha</label>
                    <input placeholder='Repita sua senha' className='bg-transparent border-1 rounded-b-sm border-gray-400 w-60 h-10 text-sm outline-none transition-all  text-red placeholder:text-gray-200 placeholder:font-extralight placeholder:text-xs font-montserrat  p-3'></input>
                </div>

                <div className='m-5'>
                    <button className='bg-[#7BDAA5] text-white w-65 h-10 text-sm font-bold shadow-black shadow font-montserrat cursor-pointer hover:scale-105 transition'>Cadastrar</button>
                </div>
            </div>
            <div className='flex items-centercenter justify-center pt-5 w-full'>
                <p className='text-white font-montserrat text-xl '>Ou cadastre-se com:</p>
            </div>
            <div className='flex flex-row gap-5 justify-center items-center h-30'>
                <div className='m-2 w-25 h-15 bg-transparent flex justify-center items-center shadow shadow-gray-400 cursor-pointer hover:scale-105 transition'>
                    <img src="/icons8-facebook-48.png" alt="" />
                </div>
                <div className='m-2 w-25 bg-transparent h-15 flex justify-center items-center shadow shadow-gray-400 cursor-pointer hover:scale-105 transition'>
                    <img src="/icons8-google-logo-32.png" className='w-10 h-10' alt="" />
                </div>
            </div>
           
           
        </div>

       </div>
        
    )
}

export default Login;