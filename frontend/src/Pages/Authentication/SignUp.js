import React from "react";
import login from "../../assets/login.png";
import google from "../../assets/google.png"
import facebook from "../../assets/facebook.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:5000/api/user";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  console.log(name);
  console.log(email);
  console.log(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/signup`, {
        email,
        name,
        password,
      });
      console.log(response.data);
      // console.log(localStorage.getItem("userType"));
      console.log(localStorage.getItem("token"));
      setEmail("");
      setPassword("");
      setName("");
      // alert("Successfully Logged in.");
      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.response);
      setEmail("");
      setPassword("");
      setName("");
      alert("Error occured while logging in");
    }
  };
// bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  return (
    <div className="w-full h-full bg-cover bg-gradient-to-r from-blue-500 to-green-400 min-h-[100%] min-w-screen">
      <h1 className="text-6xl font-bold text-white px-16 pt-10">E-LEARNING</h1>
      <br />
      {/* <h6 className="text-xl font-semibold text-white px-16">
        SignUp with us and secure your documents by verifying
      </h6> */}
      <div className="px-16 py-16 bg-white mx-40 mt-6 mb-6 h-[100%] rounded-2xl flex justify-center">
        <div className="w-1/2 h-4/5 mt-10">
          <img src={login} className="h-full w-4/5 ml-14" alt="" />
        </div>
        <div className=" w-1/2 h-4/5">
          <div className="font-bold  ml-4 text-3xl text-center pb-6">
            CREATE ACCOUNT
          </div>
          <div className="justify-center mt-8">
            <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
              Name
            </div>
            <div className="w-2/3 h-10 bg-gray-200 rounded-xl ml-32 mt-4 drop-shadow-md">
              <input
                type=" text"
                className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold"
                onChange={handleNameChange}
                value={name}
              ></input>
            </div>
          </div>
          <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
            Email
          </div>
          <div className="w-2/3 h-10 bg-gray-200 drop-shadow-md rounded-xl ml-32 mt-4">
            <input
              type=" text"
              className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold"
              onChange={handleEmailChange}
              value={email}
            ></input>
          </div>
          <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
            Password
          </div>
          <div className="w-2/3 h-10 bg-gray-200 rounded-xl ml-32 mt-4 drop-shadow-md ">
            <input
              type="password"
              className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold"
              onChange={handlePasswordChange}
              value={password}
            ></input>
          </div>
          <div className="ml-36 mt-10 w-32 h-12 ">
            <button
              className="bg-[#131313] w-96 h-12 rounded-xl text-lg  text-white font-extrabold hover:drop-shadow-xl"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="text-[#475569] m-10 text-lg text-center">
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
          <div className="font-bold ml-56 mt-10 text-lg flex">
            Already a User?&nbsp;
            <a className=" text-[#4051A3] hover:text-lightgreen" href="/login">
              Login
            </a>{" "}
            &nbsp;Here
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
