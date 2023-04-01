import React from "react";
import {useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Laborartory() {

    const navigate = useNavigate();

    const [value1,setValue1] = useState(20);
    const [value2,setValue2] = useState(0);
    const [value3,setValue3] = useState(3);
    const [value4,setValue4] = useState(0);

    const url = 'http://localhost:8000/rec';

    const handleChange1 = (e) => {
        setValue1(e.target.value);
    }
    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }
    const handleChange3 = (e) => {
        setValue3(e.target.value);
    }
    const handleChange4 = (e) => {
        setValue4(e.target.value);
    }

    console.log(value1);
    console.log(value2);
    console.log(value3);
    console.log(value4);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post(`${url}`, {
                value1,
                value2,
                value3,
                value4
            });
            console.log(response.data);
            alert("You may be suffering from "+response.data)
        } catch (error) {
            console.log(error.response);
            setValue1("");
            setValue2("");
            setValue3("");
            setValue4("");
            alert("Error occured while logging in");
            
        }
    }
    return (
        

        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />

                <div className="container mx-auto mt-12">
                        <form className="grid grid-cols-1 gap-6 mb-6 mx-3" onSubmit={handleSubmit}>
            
                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        Lymphocytes 
                                </div>
                                <div className="slider-parent mt-5 mx-20">
                                    <input id="sld1" type="range" min="20.0" max="50.0" className="w-1/2" value={value1}
                                        onChange={handleChange1}
                                    />
                                    <div className="buble"> 
                                    {value1}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        Platelets 
                                </div>
                                <div className="slider-parent mt-5 mx-20">
                                    <input id="sld2" type="range" min="0.0" max="450.0" className="w-1/2 " value={value2}
                                        onChange={handleChange2}
                                    />
                                    <div className="buble"> 
                                    {value2}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        RBC 
                                </div>
                                <div className="slider-parent mt-5 mx-20">
                                    <input id="sld3" type="range" min="3.0" max="6.0" className="w-1/2" value={value3}
                                        onChange={handleChange3}
                                    />
                                    <div className="buble"> 
                                    {value3}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        Heamoglobin 
                                </div>
                                <div className="slider-parent mt-5 mx-20">
                                    <input id="sld4" type="range" min="0.0" max="18.0" className="w-1/2" value={value4}
                                        onChange={handleChange4}
                                    />
                                    <div className="buble"> 
                                    {value4}
                                    </div>
                                </div>
                            </div>
                            <div className="flex ml-16">
                                    <div className="ml-6 ">
                                        <button type="submit" className=" h-10 px-5 text-indigo-100 bg-indigo-700
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