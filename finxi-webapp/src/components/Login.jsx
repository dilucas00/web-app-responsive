import React from 'react'
import "../Login.css"
import { useNavigate } from 'react-router-dom';


function Login(){
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
      };

    return(
       <div className='w-full bg-[#112942] h-auto'>
        <div className='flex flex-col justify-center items-center content-center    '>
            <img src="/icons/finxi-logo.png" className='w-60 h-60' alt="" />
        </div>
        <div>
            <div className='flex flex-col items-center gap-8'>
                <div className='flex items-center justify-center w-full'>
                    <h4 className='text-white text-2xl font-oswald'>Crie sua conta</h4>
                </div>

      

                {/* INPUT EMAIL */}
                <div
                className="shadow-lg flex gap-2 items-center bg-white p-2 hover:shadow-xl  duration-300 hover:border-2 border-gray-400 group rounded-md"
                >
                <svg
                    class="group-hover:rotate-[360deg] duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
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

                {/* INPUT SENHA */}

                <div
                className="shadow-lg flex gap-2 items-center bg-white p-2 hover:shadow-xl  duration-300 hover:border-2 border-gray-400 group rounded-md"
                >
                <svg
                    class="group-hover:rotate-[360deg] duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                >
                    <path d="M6 10V7a6 6 0 0 1 12 0v3" />
                    <rect x="4" y="10" width="16" height="12" rx="2" />
                    <path d="M12 16v2" />
                </svg>
                <input
                    type="password"
                    name="password"
                    className="flex-1  focus:outline-none"
                    placeholder="Senha"
                />
                </div>

                {/* INPUT CONFIRMAR SENHA */}

                <div
                className="shadow-lg flex gap-2 items-center bg-white p-2 hover:shadow-xl  duration-300 hover:border-2 border-gray-400 group rounded-md"
                >
                <svg
                    class="group-hover:rotate-[360deg] duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                >
                   <path d="M6 10V7a6 6 0 0 1 12 0v3" />
                    <rect x="4" y="10" width="16" height="12" rx="2" />
                    <path d="M12 16v2" />

                </svg>
                <input
                    type="password"
                    name="password"
                    className="flex-1  focus:outline-none"
                    placeholder="Confirmar senha"
                />
                </div>

                

                <div className='m-5'>
                    <button onClick={handleHomeClick} className='bg-[#7BDAA5] text-white w-65 h-10 text-sm font-bold shadow-black shadow font-montserrat cursor-pointer hover:scale-105 transition'>Cadastrar</button>
                </div>
            </div>
            <div className='flex items-centercenter justify-center pt-5 w-full'>
                <p className='text-white font-montserrat text-xl '>Ou cadastre-se com:</p>
            </div>
            <div className='flex flex-row gap-5 justify-center items-center h-30'>
                <div className='m-2 w-25 h-15 bg-transparent flex justify-center items-center shadow shadow-black cursor-pointer hover:scale-105 transition'>
                    <img src="/icons/icons8-facebook-48.png" alt="" />
                </div>
                <div className='m-2 w-25 bg-transparent h-15 flex justify-center items-center shadow shadow-black cursor-pointer hover:scale-105 transition'>
                    <img src="/icons/icons8-google-logo-32.png" className='w-10 h-10' alt="" />
                </div>
            </div>
        </div>
        <footer>
            <div className='flex justify-center items-center border-t-1 border-gray-600 font-montserrat text-xl p-5 text-white'>
                <p>Ja tem conta? Clique <a className='font-bold cursor-pointer text-[#7BDAA5] '> aqui </a></p>
            </div>
        </footer>
       </div>
        
    )
}

export default Login;