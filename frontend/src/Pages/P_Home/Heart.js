import React from "react";
import {useState } from "react";
import Navbar from "./Navbar";
import Labform from "./Labform";
import axios from 'axios';

export default function HeartDisease() {
    const [rbs,setRbs] = useState(0);
    const [fbs,setFbs] = useState(0);
    const [cholestrol,setC] = useState(0);
    const [ecg,setEcg] = useState(0);
    const [mhr,setMhr] = useState(0);
    const [thala,setThala] = useState(0);
    const [cp,setCp] = useState(0);

    const url = 'http://localhost:8000/heart';

    const handleChangeR = (e) => {
        setRbs(e.target.value);
    }
    const handleChangeF = (e) => {
        setFbs(e.target.value);
    }
    const handleChangeC = (e) => {
        setC(e.target.value);
    }
    const handleChangeE = (e) => {
        setEcg(e.target.value);
    }
    const handleChangeM = (e) => {
        setMhr(e.target.value);
    }
    const handleChangeT = (e) => {
        setThala(e.target.value);
    }
    const handleChangeChest =(e) =>{
        setCp(e.target.value);
    }
    console.log(cp);
    console.log(rbs);
    console.log(fbs);
    console.log(cholestrol);
    console.log(ecg);
    console.log(mhr);
    console.log(thala);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post(`${url}`, {
                cp,
                rbs,
                fbs,
                cholestrol,
                ecg,
                mhr,
                thala
            });
            console.log(response.data);
            alert(response.data)
        } catch (error) {
            console.log(error.response);
            setCp("");
            setRbs("");
            setFbs("");
            setC("");
            setEcg("");
            setMhr("");
            setThala("");
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
                                    <label className=" mr-2 font-bold text-xl ml-20">HEART DETAILS</label>
                                </div>
                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                        <label className=" mr-2 font-bold text-xl ml-20 mt-4 flex font-serif">Chest <br /> Pain</label>
                                        <label className=" mr-2 font-bold text-xl mt-12 flex">:</label>
                                        <input
                                            type="number"
                                            name="cp"
                                            className="w-full block px-16 py-2 mt-2 ml-10 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                        focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                            placeholder=""
                                            onChange={handleChangeChest}
                                            value={cp}/>
                                    </div>
                                    <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                        <label className=" mr-2 font-bold text-xl ml-20 mt-4 flex font-serif">Resting<br/>Blood<br/>Sugar</label>
                                        <label className=" mr-2 font-bold text-xl mt-12 flex">:</label>
                                        <input
                                            type="number"
                                            name="rbs"
                                            className="w-full block px-16 py-2 mt-2 ml-10 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                        focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                            placeholder=""
                                            onChange={handleChangeR}
                                            value={rbs}/>
                                    </div>

                                    <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                        <label className=" mr-2 font-bold text-xl ml-20 mt-4 flex font-serif">Fasting<br />Blood<br />Sugar</label>
                                        <label className=" mr-2 font-bold text-xl mt-12 flex">:</label>
                                        <input
                                            type="number"
                                            name="fbs"
                                            className="w-full block px-16 py-2 mt-2 ml-10 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                        focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                            placeholder=""
                                            onChange={handleChangeF}
                                            value={fbs}/>
                                    </div>

                                    <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                        <label className=" mr-2 font-bold text-xl ml-20 mt-4 flex font-serif">Cholestrol: </label>
                                        <input
                                            type="number"
                                            name="cholestrol"
                                            className="w-full block px-16 py-2 mt-2 ml-5 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                        focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                            placeholder=""
                                            onChange={handleChangeC}
                                            value={cholestrol}/>
                                    </div>

                                    <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                        <label className=" mr-2 font-bold text-xl ml-20 mt-4 flex font-serif">ECG Result </label>
                                        <label className=" mr-2 font-bold text-xl mt-6 flex">:</label>
                                        <input
                                            type="number"
                                            name="ecg"
                                            className="w-full block px-16 py-2 mt-2 ml-7 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                        focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                            placeholder=""
                                            onChange={handleChangeE}
                                            value={ecg}/>
                                    </div>     

                                    <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                        <label className=" mr-2 font-bold text-xl ml-20 mt-4 flex font-serif">Max Heart Rate </label>
                                        <label className=" mr-2 font-bold text-xl mt-6 ml-[-10px] flex">:</label>
                                        <input
                                            type="number"
                                            name="mhr"
                                            className="w-full block px-16 py-2 mt-2 ml-0 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                        focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                            placeholder=""
                                            onChange={handleChangeM}
                                            value={mhr}/>
                                    </div>

                                    <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                        <label className=" mr-2 font-bold text-xl ml-20 mt-4 flex font-serif">Thalassemia: </label>
                                        <input
                                            type="number"
                                            name="thala"
                                            className="w-full block px-16 py-2 mt-2 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                        focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                            placeholder=""
                                            onChange={handleChangeT}
                                            value={thala}/>
                                    </div>    
                                    <div className="flex ml-16">
                                        <div className="ml-6 ">
                                            <button type="submit" className=" h-10 px-5 text-indigo-100 bg-indigo-700
                                                rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                                                onClick={handleSubmit}>
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