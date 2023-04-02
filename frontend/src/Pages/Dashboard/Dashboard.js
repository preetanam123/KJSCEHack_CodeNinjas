import React from "react";
import Navbar from "../P_Home/Navbar";
import Sidebar from "../P_Home/Sidebar";
import profile from "../../assets/profile.png";
import blood from "../../assets/bloodDrop.svg";
import height from "../../assets/height.svg";
import weight from "../../assets/weightScale.svg";
import plus from "../../assets/plusSign.svg";
import Calendar from "../P_Home/Calender";
// import Chat from '../../components/Chat';
import Chat from "../../components/Chat";
export default function Reports() {
    return(
        <div>
            <Navbar />
         
            <div className="flex">
                <Sidebar />

                <div className="flex w-full justify-between">
                    <div className="grid grid-cols-4 gap-4">
                    <div className="w-100 col-span-3">
                        <div className="mx-2 mt-3 px-16 py-10 text-[#090E40] h-40 rounded-xl shadow-lg">
                            <div className="h-56">
                                <div className="w-100">
                                    <span className="font-bold text-4xl font-serif ">Hello,</span> <span className="font-bold text-4xl font-serif text-[#f6f627]">Janvi Mehta</span> 
                                    <p className="font-medium text-gray-600 pt-4 font-serif">Have a nice day and don't forget to take care of your health!</p>
                                </div>                                                    
                            </div>

                        </div>

                        <div className="mx-2 mt-3 pt-10 flex">
                            <div className="flex rounded-xl h-36 w-80 hover:shadow-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500">
                                <p className="font-serif font-medium py-10 px-10 text-left text-xl text-slate-50">
                                    Make a clinic <br /> appointment
                                </p>
                                <div className="py-14 px-10">
                                    <a href="./Appointment">
                                        <img src={plus} alt="" className="hover:w-7 hover:h-7"/>
                                    </a>
                                </div>
                            </div>
                            <div>

                                <Calendar />
                            </div>
                            
                        </div>

                        {/* <div className="">
                            <Calendar />
                        </div> */}
                    </div>    

                    <div className="">
                        <div className="flex my-3">
                            <div className="flex h-screen p-3 bg-indigo-800 shadow w-96 rounded-xl mr-2">
                                <div className="mx-auto">
                                    <div className="p-10 border-blue-200 border-spacing-2 ">
                                        <div className=" items-center p-5 border-blue-200 border-2 rounded-xl">
                                            <div className="mx-auto w-24 h-24 border-2 rounded-xl bg-blue-50">
                                                <img src={profile} alt=""  />
                                            </div>
                                            <div className="">
                                                <h2 className="text-xl font-bold text-center mt-4 font-serif text-indigo-50">Janvi Mehta</h2>
                                                <p className="text-center font-serif text-indigo-200">21 years</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 my-7 mx-0">
                                                <div className=" p-0.5 rounded-md text-center bg-opacity-25 bg-slate-100 font-serif text-indigo-200">
                                                    <div className="py-2 flex justify-center">
                                                        <img src={height} alt="" className=""/>
                                                    </div>
                                                    Height <br />157.4 <br /> cm
                                                </div>
                                                <div className="p-0.5 rounded-md text-center bg-opacity-25 bg-slate-100 font-serif text-indigo-200">
                                                    <div className="py-2 flex justify-center">
                                                        <img src={weight} alt="" />
                                                    </div>
                                                    Weight <br />44 <br /> kg
                                                </div>
                                                <div className="p-0.5 rounded-md text-center bg-opacity-25 bg-slate-100 font-serif text-indigo-200">
                                                    <div className="py-2 flex justify-center">
                                                        <img src={blood} alt="" />
                                                    </div>
                                                    Blood Group <br />A+
                                                </div>
                                                <div className="p-0.5 rounded-md text-center bg-opacity-25 bg-slate-100 font-serif text-indigo-200">
                                                    <div className="py-2 flex justify-center">
                                                        <img src={weight} alt="" />
                                                    </div>
                                                    Body Mass Index <br /> 17.8 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>        
                        </div>
                    </div>
                    </div>
                </div>


            </div>
             {/* <Chat />  */}
        </div>    

    );
}