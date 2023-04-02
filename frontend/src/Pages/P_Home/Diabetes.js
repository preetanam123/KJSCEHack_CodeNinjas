import React from "react";
import {useState } from "react";
import Navbar from "./Navbar";
import Labform from "./Labform";
import axios from 'axios';

export default function Diabetes() {
    const [glucose,setGlucose] = useState(0);
    const [bp,setBp] = useState(0);
    const [st,setSt] = useState(0);
    const [insulin,setInsulin] = useState(0);
    const [bmi,setBmi] = useState(0);
    const [dpf,setDpf] = useState(0);

    const url = 'http://localhost:8000/diabetes';

    const handleChangeG = (e) => {
        setGlucose(e.target.value);
    }
    const handleChangeB = (e) => {
        setBp(e.target.value);
    }
    const handleChangeS = (e) => {
        setSt(e.target.value);
    }
    const handleChangeI = (e) => {
        setInsulin(e.target.value);
    }
    const handleChangeM = (e) => {
        setBmi(e.target.value);
    }
    const handleChangeD = (e) => {
        setDpf(e.target.value);
    }

    console.log(glucose);
    console.log(bp);
    console.log(st);
    console.log(insulin);
    console.log(bmi);
    console.log(dpf);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post(`${url}`, {
                glucose,
                bp,
                st,
                insulin,
                bmi,
                dpf
            });
            console.log(response.data);
            alert(response.data)
        } catch (error) {
            console.log(error.response);
            setGlucose("");
            setBp("");
            setSt("");
            setInsulin("");
            setBmi("");
            setDpf("");
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
                                    <label className=" mr-2 font-bold text-xl ml-20">DIABETES DETAILS</label>
                                </div>
                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex font-serif">Glucose: </label>
                                    <input
                                        type="number"
                                        name="glucose"
                                        className="w-full block px-16 py-2 mt-2 ml-10 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeG}
                                        value={glucose}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex font-serif">Blood Pressure</label>
                                    <label className=" mr-2 font-bold text-[#000000] text-xl mt-6 flex ml-[-11px]">:</label>
                                    <input
                                        type="number"
                                        name="bp"
                                        className="w-full block px-16 py-2 mt-2 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeB}
                                        value={bp}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex font-serif">Skin Thickness</label>
                                    <label className=" mr-2 font-bold text-[#000000] text-xl mt-6 flex ml-[-11px]">:</label>
                                    <input
                                        type="number"
                                        name="st"
                                        className="w-full block px-16 py-2 mt-2 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeS}
                                        value={st}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex font-serif">Insulin: </label>
                                    <input
                                        type="number"
                                        name="insulin"
                                        className="w-full block px-16 py-2 mt-2 ml-12 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeI}
                                        value={insulin}/>
                                </div>     

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex font-serif">BMI: </label>
                                    <input
                                        type="number"
                                        name="insulin"
                                        className="w-full block px-16 py-2 mt-2 ml-20 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeM}
                                        value={bmi}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex font-serif">Diabetes<br />Pedigree<br />Function </label>
                                    <label className=" mr-2 font-bold text-[#000000] text-xl mt-12 flex">:</label>
                                    <input
                                        type="number"
                                        name="insulin"
                                        className="w-full block px-16 py-2 mt-2 ml-6 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeD}
                                        value={dpf}/>
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