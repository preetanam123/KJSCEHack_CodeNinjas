import React from "react";
import login from "../../assets/login.png"
import google from "../../assets/google.png"
import facebook from "../../assets/facebook.png"
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const url = 'http://localhost:5000/api/user';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/login`, { email, password });
      // console.log(localStorage.getItem("userType"));
      console.log(localStorage.getItem("token"));
      setEmail("");
      setPassword("");
      // alert("Successfully Logged in.");
      if (response.data){
        navigate("/");
      }
      
    } catch(error) {
      console.log(error)
      setEmail("");
      setPassword("");
      alert('Error occured while logging in');
    }
  }

  return (
    <>
      <div className="w-full h-fit bg-cover bg-gradient-to-r from-green-400 to-blue-500 min-h-screen min-w-screen">
        <h1 className="text-6xl font-bold text-white px-16 pt-10">E-LEARNING</h1>
        <br />
        {/* <h6 className="text-xl font-semibold text-white px-16">A platform to Verify your documents and safeguard them</h6> */}
        <div className="px-16 py-16 bg-white mx-40 mt-6 mb-6 h-[100%] rounded-2xl flex justify-center" >
          <div className=" w-1/2 h-4/5">
            <div className="font-bold  ml-4 text-4xl text-center pb-6">LOGIN 
            </div> 
            
            <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4" >
              Email
            </div>
            <div className="w-2/3 h-12 bg-gray-200 rounded-xl ml-32 mt-4 drop-shadow-md">
              <input type=" text" className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold" onChange={handleEmailChange}></input>
            </div>
            <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
              Password
            </div>
            <div className="w-2/3 h-12 bg-gray-200 rounded-xl ml-32 mt-4 drop-shadow-md">
              <input type="password" className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold" onChange={handlePasswordChange}></input>
            </div>
            <div className=" ml-36 mt-10 w-32 h-12 ">
            <button className="bg-[#131313] w-96 h-12 rounded-xl text-lg  text-white font-extrabold hover:drop-shadow-xl" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="text-[#475569] m-8 text-lg text-center">
              OR
          </div>
          <div className="flex justify-center mt-8">
              <button className="flex justify-evenly items-center text-center w-2/3 h-12 ml-8 bg-[#3A5999] text-white rounded-xl py-1 font-bold text-lg cursor-pointer">
                <img src={google} className="h-3/4 rounded-full" /> Log In With Your Google Account
              </button>
          </div>
          <div className="flex justify-center mt-8">
              <button className="flex justify-evenly items-center text-center w-2/3 h-12 ml-8 bg-[#F44236] text-white rounded-xl py-1 font-bold text-lg cursor-pointer">
                <img src={facebook} className="h-3/4 rounded-full" /> Log In With Your Facebook Account
              </button>
          </div>
          <div className="font-bold ml-56 mt-4 text-lg flex">
                New User?<a className=" text-[#4051A3] hover:text-lightgreen" href="/signup">
                Sign Up
              </a> &nbsp;Here
          </div>
          </div>
          
          <div className="w-1/2 h-4/5">
            <img src={login} className="h-full w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
