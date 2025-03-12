import React from 'react'
import "../Login.css"

function Login(){
    return(
       <div className='w-full h-full'>
        <div className='flex flex-col justify-center items-center content-center   '>
            <img src="/public/finxi-logo.png" className='w-50 h-50' alt="" />
        </div>
        <div>
            <div className='flex flex-col items-center gap-10'>
                <div className='flex items-start w-60'>
                    <h4 className='text-white'>Crie sua conta</h4>
                </div>
                <input className='bg-white w-60 h-8 '></input>
                <input className='bg-white w-60 '></input>
                <input className='bg-white w-60 '></input>
                <button className='bg- text-white'>Buscar</button>
            </div>
            <div>
                <p>Ou cadastre-se com:</p>
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