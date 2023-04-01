import React from 'react'
import { useNavigate } from "react-router-dom";
import image from "../../assets/image.jpeg";
// import Chat from '../../components/Chat'
// import '../../App.css'
import Chat from '../../components/Chat';
const Landing = () => {
  let navigate = useNavigate(); 
  
  const SignUp = () => {
    let SignUp = 'SignUp'; 
    navigate(SignUp);
  }

  return (
    <div className='bg-gradient-to-br from-blue-500 via-green-400 to-white'>
      <div className='w-full h-screen flex justify-center'>
        <div className='flex-col justify-center w-full h-screen rounded-xl text-5xl font-bold text-slate-100 text-center mt-2 ' >
          <h1>WELCOME TO MEDIEAZE</h1>
          <div className='mt-4 opacity-1'>
            <img src={image} className="rounded" alt="" srcset="" />
          </div>
          <div>
            <button onClick={SignUp} className="flex justify-evenly items-center text-center w-32 h-12 mt-2 ml-8 bg-[#3A5999] text-white rounded-xl py-1 font-bold text-lg cursor-pointer"
            >
              Start Here
            </button>
          </div>
          
        </div>

      </div>
        
        {<Chat /> }
    </div>
  )
}

export default Landing
