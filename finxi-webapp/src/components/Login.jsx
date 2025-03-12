import React from 'react'
import "../Login.css"

function Login(){
    return(
       <div className='w-full h-full'>
        <div className='flex flex-col justify-center items-center content-center   '>
            <img src="/public/finxi-logo.png" className='w-50 h-50' alt="" />
        </div>
        <div>
            <div className='flex flex-col items-center gap-8'>
                <div className='flex items-start w-60'>
                    <h4 className='text-white'>Crie sua conta</h4>
                </div>
                <input placeholder='Email' className='bg-white w-60 h-10 text-sm outline-none rounded-xl p-3'></input>
                <input placeholder='Senha' className='bg-white w-60 h-10 text-sm outline-none rounded-xl p-3 '></input>
                <input placeholder='Confirme sua senha' className='bg-white w-60 h-10 text-sm outline-none rounded-xl p-3 '></input>
                <button className='bg- text-white'>Buscar</button>
            </div>
            <div className='flex items-centercenter justify-center w-full'>
                <p className='text-white'>Ou cadastre-se com:</p>
            </div>
            <div>
                Icone Facebook
            </div>
            <div>
                Icone Google
            </div>
           
           
        </div>

       </div>
        
    )
}

export default Login;