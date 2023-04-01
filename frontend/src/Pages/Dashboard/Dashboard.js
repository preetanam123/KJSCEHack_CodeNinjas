import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Reports() {
    return(
        <div>
            <Navbar />
         
            <div className="flex">
                <Sidebar />

            </div>
        </div>    

    );
}