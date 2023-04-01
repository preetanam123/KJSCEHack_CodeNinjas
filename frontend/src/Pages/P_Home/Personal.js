import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Personal() {

    const navigate = useNavigate();

    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');

    // const handleChangeG = (e) => {
    //     setGender(e.value);
    // }
    const url = 'http://localhost:5000/api/personal';

    const handleChangeN = (e) => {
        setName(e.target.value);
    }

    const handleChangeA = (e) => {
        setAge(e.target.value);
    }
    const handleChangeAd = (e) => {
        setAddress(e.target.value);
    }
    const handleChangeB = (e) => {
        setBloodGroup(e.target.value);
    }
    // setGender('Male');
    console.log(gender);
    console.log(name);
    console.log(age);
    console.log(address);
    console.log(bloodGroup);
    
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post(`${url}`, {
                name,
                age,
                address,
                bloodGroup
            });
            console.log(response.data);
            if(response.data){
                alert("Details added Successfulyl");
            }
        } catch (error) {
            console.log(error.response);
            setName("");
            setAge("");
            setAddress("");
            setBloodGroup("");
            alert("Error occured while logging in");
            
        }
    }

    return (
        <div>
            <Navbar />
            <div className="flex">
            <Sidebar />

                <div className="container mx-auto mt-12">
                        <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mx-3" onSubmit = {handleSubmit}>
            
                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                    <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex " >
                                        Salutation:
                                    <span className="flex gap-6 ml-8">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label for="html">Mr.</label>
                                        <input type="radio" id="css" name="fav_language" value="CSS" />
                                        <label for="css">Mrs.</label>
                                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                        <label for="javascript">Master</label>
                                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                        <label for="javascript">Miss</label>
                                    </span>
                                    </div>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow">
                                    <div className="font-bold text-[#000000] text-xl ml-20 mt-4 flex" >
                                        Gender:
                                    <span className="flex gap-6 ml-8">
                                        <input type="radio" id="html" name="gender" value="Male" />
                                        <label for="html">Male</label>
                                        <input type="radio" id="css" name="gender" value="Female" />
                                        <label for="css">Female</label>
                                        <input type="radio" id="javascript" name="gender" value="Other" />
                                        <label for="javascript">Other</label>
                                    </span>
                                    </div>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full block px-16 py-2 mt-2 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder="John Doe"
                                        onChange={handleChangeN}
                                        value={name}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex mr-5">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Age: </label>
                                    <input
                                        type="number"
                                        name="age"
                                        className="w-full block px-16 py-2 mt-2 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeA}
                                        value={age}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex">
                                    <label className=" mr-2 font-bold text-[#000000] text-xl ml-20 mt-4 flex">Address: </label>
                                    <textarea rows="4" cols="50"
                                        type="text"
                                        name="address"
                                        className="w-full block px-16 py-2 mt-2 border-gray-500 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring
                                    focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
                                        placeholder=""
                                        onChange={handleChangeAd}
                                        value={address}/>
                                </div>

                                <div className="w-full px-2 py-2 bg-white rounded-lg shadow flex h-[57%]">
                                    <label className=" mr-8 font-bold text-[#000000] text-xl ml-20 mt-4">Blood Group: </label>
                                        <select name="bloodgroup" onChange={handleChangeB} value={bloodGroup}>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>    
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
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