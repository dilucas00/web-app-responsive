import React from 'react'
import "../Login.css"

function Login(){
    return(
       <div className='w-full h-full'>
        <div className='flex flex-col justify-center items-center content-center   '>
            <img src="/public/finxi-logo.png" className='w-60 h-60' alt="" />
        </div>
        <div>
            <div className='flex flex-col items-center gap-8'>
                <div className='flex items-center justify-center w-60'>
                    <h4 className='text-white text-xl font-oswald'>Crie sua conta</h4>
                </div>
                <input placeholder='Email' className='bg-transparent border-b-1 border-white w-60 h-10 text-sm outline-none transition-all  text-red placeholder:text-gray-200 placeholder:font-extralight placeholder:text-xs font-montserrat  p-3'></input>

                <input placeholder='Senha' className='bg-transparent border-b-1 border-white w-60 h-10 text-sm outline-none transition-all  text-red placeholder:text-gray-200 placeholder:font-extralight placeholder:text-xs font-montserrat  p-3'></input>

                <input placeholder='Confirme sua senha' className='bg-transparent border-b-1 border-white w-60 h-10 text-sm outline-none transition-all  text-red placeholder:text-gray-200 placeholder:font-extralight placeholder:text-xs font-montserrat  p-3'></input>
                <div className='m-5'>
                    <button className='bg-[#7BDAA5] text-white w-65 h-10 text-sm font-bold shadow-gray-200 shadow font-montserrat cursor-pointer'>Cadastrar</button>
                </div>
            </div>
            <div className='flex items-centercenter justify-center w-full'>
                <p className='text-white font-montserrat text-xl'>Ou cadastre-se com:</p>
            </div>
            <div className='flex flex-row gap-7 mt-10 justify-center items-center'>
                <div>
                    Icone Facebook
                </div>
                <div>
                    Icone Google
                </div>
            </div>
           
           
        </div>

       </div>
        
    )
}

export default Login;