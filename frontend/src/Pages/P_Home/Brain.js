// Hypertension, Heart disease(yes,no) , Avg glucose level, bmi, current smoking status(currently smoking,used to smoke)

import React from "react";
import {useState } from "react";
import Navbar from "./Navbar";
import Labform from "./Labform";
import axios from 'axios';

export default function BrainStroke() {
    const [hypert,setHypert] = useState(0);
    const [hd,setHd] = useState(0);
    const [agl,setAgl] = useState(0);
    const [bmi,setBmi] = useState(0);
    const [smoking,setSmoking] = useState(0);

    const url = 'http://localhost:8000/brain';

    const handleChangeH = (e) => {
        setHypert(e.target.value);
    }
    const handleChangeHd = (e) => {
        setHd(e.target.value);
    }
    const handleChangeA = (e) => {
        setAgl(e.target.value);
    }
    const handleChangeB = (e) => {
        setBmi(e.target.value);
    }
    const handleChangeS = (e) => {
        setSmoking(e.target.value);
    }

    console.log(hypert);
    console.log(hd);
    console.log(agl);
    console.log(bmi);
    console.log(smoking);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post(`${url}`, {
                hypert,
                hd,
                agl,
                bmi,
                smoking
            });
            console.log(response.data);
            alert(response.data)
        } catch (error) {
            console.log(error.response);
            setHypert("");
            setHd("");
            setAgl("");
            setBmi("");
            setSmoking("");
            alert("Error occured while logging in");
            
        }
    }

    return(

        <div>
            <Navbar />
            <div className="flex">
                {/* <Sidebar /> */}
                <Labform />

                <div className="container mx-auto mt-12 font-serif">
                            <form className="grid grid-cols-1 gap-6 mb-6 mx-3" onSubmit={handleSubmit}>
                                <div className="w-full px-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-xl ml-20">BRAIN DETAILS</label>
                                </div>
                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-xl ml-20 mt-4 flex font-serif">Hypertension: </label>
                                    <input
                                        type="number"
                                        name="glucose"
                                        className="w-full block px-16 py-2 mt-2 ml-0 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeH}
                                        value={hypert}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-xl ml-20 mt-4 flex font-serif">Heart<br />Disease</label>
                                    <label className=" mr-2 font-bold text-xl mt-6 flex">:</label>
                                    <span className="flex gap-6 ml-14">
                                        <input type="radio" id="html" name="gender" value="1" onChange={handleChangeHd}/>
                                        <label for="heartdisease" className=" mr-2 font-semibold text-[#000000] text-xl mt-6 flex">Yes</label>
                                        <input type="radio" id="css" name="gender" value="0" onChange={handleChangeHd} />
                                        <label for="heartdisease" className=" mr-2 font-semibold text-[#000000] text-xl mt-6 flex">No</label>
                                    </span>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex font-serif">Average<br />Glucose<br />Level </label>
                                    <label className=" mr-2 font-bold text-[#000000] text-xl mt-12 flex">:</label>
                                    <input
                                        type="number"
                                        name="agl"
                                        className="w-full block px-16 py-2 mt-2 ml-10 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeA}
                                        value={agl}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex font-serif">BMI: </label>
                                    <input
                                        type="number"
                                        name="bmi"
                                        className="w-full block px-16 py-2 mt-2 ml-20 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeB}
                                        value={bmi}/>
                                </div>     

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex font-serif">Current<br />Smoking<br />Status </label>
                                    <label className=" mr-2 font-bold text-[#000000] text-xl mt-12 flex">:</label>
                                    <span className="flex gap-6 ml-10 mt-4">
                                        <input type="radio" id="cs" name="css" value="3" onChange={handleChangeS}/>
                                        <label for="smoking" className=" mr-2 font-semibold text-[#000000] text-xl mt-6 flex">Currently Smoking</label>
                                        <input type="radio" id="uts" name="css" value="1" onChange={handleChangeS} />
                                        <label for="smoking" className=" mr-2 font-semibold text-[#000000] text-xl mt-6 flex">Used to Smoke</label>
                                        <input type="radio" id="ns" name="css" value ="2"  onChange={handleChangeS    }/>
                                        <label for="smoking" className=" mr-2 font-semibold text-[#000000] text-xl mt-6 flex">Never Smoke</label>
                                    </span>
                                </div>       
                                <div className="flex ml-16">
                                    <div className="ml-6 ">
                                        <button onClick = {handleSubmit} type="submit" className=" h-10 px-5 text-indigo-100 bg-indigo-700
                                            rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
                                            Submit
                                        </button>
                                    </div>
                            </div>                    
                            </form>
                </div>
            </div>
        </div>

    );
}