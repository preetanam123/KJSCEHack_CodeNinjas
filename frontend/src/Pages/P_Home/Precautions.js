import React, { useState } from "react";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import Chat from "../../components/Chat";

export default function Precautions() {
  const [disease, setDisease] = useState("");
  const [description, setDescription] = useState("");
  const [precaution, setPrecaution] = useState([]);

  const handleChange = (e) => {
    setDisease(e.target.value);
  };
  const handleClick = (e) => {
    if (disease === "Dengue") {
      setDescription(
        "an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. — called also breakbone fever, dengue fever."
      );
      setPrecaution("drink papaya leaf juice, avoid fatty spicy food, keep mosquitos away, keep hydrated");
    } else if (disease === "Typhoid") {
      setDescription(
        "An acute illness characterized by fever caused by infection with the bacterium Salmonella typhi. Typhoid fever has an insidious onset, with fever, headache, constipation, malaise, chills, and muscle pain. Diarrhea is uncommon, and vomiting is not usually severe."
      );
      setPrecaution("eat high calorie vegitables, antiboitic therapy, consult doctor, medication");
    } else if (disease === "Anemia") {
      setDescription(
        "Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues. Having anemia, also referred to as low hemoglobin, can make you feel tired and weak. There are many forms of anemia, each with its own cause."
      );
      setPrecaution("Eat iron-rich foods which also contain Vitamin C in them, Avoiding exposure to certain chemicals, Taking good care of your teeth and going to the dentist regularly, Getting regular exercise");
    }
    else{
        setPrecaution("");
        setDescription("");
    }
  };
  
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center">
        <div>
          <Sidebar />
        </div>
        <div className="flex justify-center mx-52 mt-30 px-16 py-16 text-[#090E40] w-3/4 h-5/6 rounded-xl bg-gradient-to-r from-indigo-400">
        <div className="m-auto">
          <label className="text-center m-10 font-bold text-[#000000] text-xl">
            Enter the Disease you were diagnosed with:{" "}
          </label>
          <input
            type="text"
            className="border-gray-500 border-2 rounded-md m-10  "
            onChange={handleChange}
          />
          <button
            onClick={handleClick}
            className=" h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
          >
            Submit
          </button>
          <div className="m-10 font-bold text-[#000000] text-xl">
            Description:
            <br />
            {description}
          </div>
          <div className="m-10 font-bold text-[#000000] text-xl">
            Precautions:
            <br />
            {precaution}
          </div>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
}
