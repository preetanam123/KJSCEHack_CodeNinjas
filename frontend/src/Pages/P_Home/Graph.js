import React from "react";
import Navbar from "./Navbar";
// import indefinite-integration.gif from './components'
import typhoid from '../../assets/typhoid.png'
import hypertension from '../../assets/hypertension.png'
import heart_attack from '../../assets/heart_attack.png'



export default function RightP1() {
  return (
    <>
    <div>
      <Navbar />
      <header
        style={{ textAlign: "center", whiteSpace: "nowrap", display: "inline" }}
      >
        <h2 className="header">
        </h2>
      </header>
      <section style={{ textAlign: "center" }}>
        
        <h4 className="my-5">
          The Analysis of Disease and  :
          <br />
          <img
            src={typhoid}
            alt=""
            style={{ width: "350px", height: "350px" }}
          />

            <img
            src={hypertension}
            alt=""
            style={{ width: "350px", height: "350px" }}
          />

            <img
            src={heart_attack}
            alt=""
            style={{ width: "350px", height: "350px" }}
          />
        </h4>
      </section>
      </div>
    </>
  );
}
