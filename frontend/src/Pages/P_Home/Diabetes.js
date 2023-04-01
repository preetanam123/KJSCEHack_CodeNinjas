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

    const url = 'http://localhost:8000/rec';

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
            alert("You may be suffering from "+response.data)
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

                <div className="container mx-auto mt-12">
                            <form className="grid grid-cols-1 gap-6 mb-6 mx-3" onSubmit={handleSubmit}>
                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Glucose: </label>
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
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Blood Pressure: </label>
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
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Skin Thickness: </label>
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
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Insulin: </label>
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
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">BMI: </label>
                                    <input
                                        type="number"
                                        name="insulin"
                                        className="w-full block px-16 py-2 mt-2 ml-16 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeM}
                                        value={bmi}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Diabetes<br />Pedigree<br />Function </label>
                                    <label className=" mr-2 font-bold text-[#000000] text-xl mt-4 flex">:</label>
                                    <input
                                        type="number"
                                        name="insulin"
                                        className="w-full block px-16 py-2 mt-2 ml-4 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeD}
                                        value={dpf}/>
                                </div>                           
                            </form>
                </div>
            </div>
        </div>

    );
}