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
                <div
                className="shadow-lg flex gap-2 items-center bg-white p-2 hover:shadow-xl  duration-300 hover:border-2 border-gray-400 group rounded-md"
                >
                <svg
                    class="group-hover:rotate-[360deg] duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                >
                    <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <path d="M22 6l-10 7L2 6"></path>
                </svg>
                <input
                    type="email"
                    name="text"
                    className="flex-1  focus:outline-none"
                    placeholder="Email"
                />
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
                    <button className='bg-[#7BDAA5] text-white w-65 h-10 text-sm font-bold shadow-black shadow shadow font-montserrat cursor-pointer hover:scale-105 transition'>Cadastrar</button>
                </div>
            </div>
            <div className='flex items-centercenter justify-center pt-5 w-full'>
                <p className='text-white font-montserrat text-xl '>Ou cadastre-se com:</p>
            </div>
            <div className='flex flex-row gap-5 justify-center items-center h-30'>
                <div className='m-2 w-25 h-15 bg-transparent flex justify-center items-center shadow shadow-black cursor-pointer hover:scale-105 transition'>
                    <img src="/icons8-facebook-48.png" alt="" />
                </div>
                <div className='m-2 w-25 bg-transparent h-15 flex justify-center items-center shadow shadow-black cursor-pointer hover:scale-105 transition'>
                    <img src="/icons8-google-logo-32.png" className='w-10 h-10' alt="" />
                </div>
            </div>
           
           
        </div>

       </div>
        
    )
}

export default Login;