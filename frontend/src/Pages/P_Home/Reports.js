import React from "react";
import Navbar from "./Navbar";
import Reportform from "./Reportform";
import { useState } from "react";
import axios from 'axios';
// import { Document, Page } from 'react-pdf';
// import pdf from '../../Book1.pdf'
import Chat from "../../components/Chat";

export default function Reports() {
    const [viewPdf, setViewPdf] = useState(false);
    const [pdfData, setpdfData] = useState(false);
    const url = 'http://localhost:8000/upload';
    let file;
    const sendPdf = (e) => {
        file = e.target.files[0];
    }


    const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     try {
    //         // const file = e.target.files[0];
    //         if (file != null) {
    //             const data = new FormData();
    //             data.append('file_from_react', file);
    //             const response = await axios.post(`${url}`, data);
    //             console.log(response);
    //             setpdfData(response.data);
    //     }

    // const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            // const file = e.target.files[0];
            if (file != null) {
                const data = new FormData();
                data.append('file_from_react', file);
                const response = await axios.post(`${url}`, data);
                console.log(response);
                setpdfData(response.data);
                alert("Success")
        }
       
    }
    catch (e) {
        alert("Error uploading file")
        console.log(e);
    }
}


//     const handleView =() =>{
//         setViewPdf(true);
//     }

    return (
        <div>
               
            <Navbar />
         
            <div className="flex">
                <Reportform />
                {/* <div className="flex justify-center mx-52 mt-40 px-16 py-16 text-[#090E40] w-3/4 h-5/6 rounded-xl
                bg-indigo-400">
                    <div className=" ml-20  flex-col" >
                        <div className="font-bold text-[#000000] text-2xl my-10 ">
                            <h1>Please Upload your Blood Reports </h1>
                        </div>
                        <div className="font-medium text-[#000000] text-xl">
                            <input type="file" name="file" onChange={sendPdf}/>
                        </div>
                        <div>
                            <button type="submit" className="my-10 mr-5 h-10 px-5 text-indigo-100 bg-indigo-700
                            rounded-lg transition-colors duration-150 drop-shadow-md hover:drop-shadow-lg hover:bg-indigo-800" 
                            onClick={handleSubmit}>
                                Submit
                            </button>
                            <button type="button" className="my-10 ml-5 h-10 px-5 text-indigo-100 bg-indigo-700
                            rounded-lg transition-colors duration-150 drop-shadow-md hover:drop-shadow-lg hover:bg-indigo-800"
                            onClick={handleView}>
                                View Report
                            </button>
                            { 
                                viewPdf ?<div className="text-xl">
                                    <b>
                                {pdfData[0]}</b>
                                <br />
                                <b>
                                {pdfData[1]}</b>
                                <br />
                                <b>
                                {pdfData[2]}</b>
                                <br />
                                <b>
                                {pdfData[3]}</b>
                                </div> : <div>

                                </div> 
                            }
                        </div>
                    
                    </div>
                    <div className="w-96 h-full flex flex-justify-center mt-8">
                        <img src={m_r} alt="" srcset="" />
                    </div>
                </div>
                 */}
               
               <div className="flex justify-center mx-52 mt-40 px-16 py-16 text-[#090E40] w-3/4 h-5/6 rounded-xl
                shadow-lg">
                    <div className="ml-6  flex-col" >
                        <div className="font-bold text-[#000000] text-2xl my-10 font-serif">
                            <h1>FIND ALL YOUR REPORTS HERE </h1>
                        </div>
                    
                    </div>
                    
                </div>
               
            </div>

            {/* <Chat/> */}
        </div>
    );
}