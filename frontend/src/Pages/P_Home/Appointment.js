import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import doc1 from "../../assets/doc1.jpg";
import doc2 from "../../assets/doc2.jpeg";
import doc3 from "../../assets/doc3.png";

import Card from "../../components/Card";

export default function Billing() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () =>{
        alert("Appointment booked Successfully");
        
    }
    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap">
                <Sidebar />
                <div>

                    <Card
                        image={doc1}
                        name={"Dr. Avinash Chatterji"}
                        desc={"Jaslok Hospital"}
                        spec={"Oncologist"}
                        book={"Select time"}
                    />
                    <button
                        className="bg-blue-200 text-black active:bg-blue-400 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none m-10"
                        type="button"
                        onClick={handleClick}
                    >
                        Book Appointment
                    </button>
                </div>
                <div>

                    <Card
                        image={doc2}
                        name={"Dr. Mithul Doshi"}
                        desc={"P.V Hinduja Hospital"}
                        spec={"Pediatrician"}
                        book={"Select time"}
                    />
                    <button
                        className="bg-blue-200 text-black active:bg-blue-400 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none m-10"
                        type="button"
                        onClick={handleClick}
                    >
                        Book Appointment
                    </button>
                </div>
                <div>
                    <Card
                        image={doc3}
                        name={"Dr. Prerak Mehta"}
                        desc={"Lilavati Hospital"}
                        spec={"Neurologist"}
                        book={"Select time"}
                    />
                    <button
                        className="bg-blue-200 text-black active:bg-blue-400 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none m-10"
                        type="button"
                        onClick={handleClick}
                    >
                        Book Appointment
                    </button>
                </div>

            </div>
        </div>
    );
}