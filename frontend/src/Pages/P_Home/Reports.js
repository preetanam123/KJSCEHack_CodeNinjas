import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import m_r from "../../assets/medical_report.png";
// import { Document, Page } from 'react-pdf';
// import pdf from '../../Book1.pdf'


export default function Reports() {
    const [viewPdf, setViewPdf] = useState(false);

    const handleView =() =>{
        setViewPdf(true);
    }
    return (
        <div>
               
            <Navbar />
         
            <div className="flex">
                <Sidebar />
                <div className="flex justify-center mx-52 mt-40 px-16 py-16 text-[#090E40] w-3/4 h-5/6 rounded-xl
                bg-gradient-to-r from-indigo-400">
                    <div className=" ml-20  flex-col" >
                        <div className="font-bold text-[#000000] text-2xl my-10 ">
                            <h1>Please Upload your Blood Reports </h1>
                        </div>
                        <div className="font-medium text-[#000000] text-xl">
                            <input type="file" name="file" />
                        </div>
                        <div>
                            <button type="submit" className="my-10 mr-5 h-10 px-5 text-indigo-100 bg-indigo-700
                            rounded-lg transition-colors duration-150 drop-shadow-md hover:drop-shadow-lg hover:bg-indigo-800" 
                            onClick={() => alert("Pdf submitted")}>
                                Submit
                            </button>
                            <button type="button" className="my-10 ml-5 h-10 px-5 text-indigo-100 bg-indigo-700
                            rounded-lg transition-colors duration-150 drop-shadow-md hover:drop-shadow-lg hover:bg-indigo-800"
                            onClick={handleView}>
                                View Report
                            </button>
                            { 
                                viewPdf ?<div>
                                <h1>Hemoglobin : 10.8</h1>
                                <br />
                                <h1>RBC        : 3.3 </h1>
                                <br/>
                                <h1>Platelet   : 105 </h1>
                                <br/>
                                <h1>Lymphocytes        : 21.23</h1>
                                </div> : <div>

                                </div> 
                            }
                        </div>
                    
                    </div>
                    <div className="w-96 h-full flex flex-justify-center mt-8">
                        <img src={m_r} alt="" srcset="" />
                    </div>
                </div>
                
               

               
            </div>

            
        </div>
    );
}