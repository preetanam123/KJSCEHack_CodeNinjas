import React, { useState } from "react";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
// import Chat from "../../components/Chat";

export default function Precautions() {
  const [disease, setDisease] = useState("");
  const [description, setDescription] = useState("");
  const [precaution, setPrecaution] = useState([]);
  const [medicine, setMedicine] = useState("");

  const handleChange = (e) => {
    setDisease(e.target.value);
  };
  const handleClick = (e) => {
    if (disease === "Dengue") {
      setDescription(
        "an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. — called also breakbone fever, dengue fever.");
      setPrecaution("drink papaya leaf juice, avoid fatty spicy food, keep mosquitos away, keep hydrated");
      setMedicine("No specific antiviral agents exist for dengue. Supportive care is advised: Patients should be advised to stay well hydrated and to avoid aspirin (acetylsalicylic acid), aspirin-containing drugs, and other nonsteroidal anti-inflammatory drugs (such as ibuprofen) because of their anticoagulant properties.")
    } else if (disease === "Typhoid") {
      setDescription(
        "An acute illness characterized by fever caused by infection with the bacterium Salmonella typhi. Typhoid fever has an insidious onset, with fever, headache, constipation, malaise, chills, and muscle pain. Diarrhea is uncommon, and vomiting is not usually severe."
      );
      setPrecaution("eat high calorie vegitables, antiboitic therapy, consult doctor, medication");
      setMedicine("ciprofloxacin or ofloxacin is recommended for fully sensitive typhoid cases; alternatively, chloramphenicol, amoxicillin and co-trimoxazole are also recommended.")

    } else if (disease === "Anemia") {
      setDescription(
        "Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues. Having anemia, also referred to as low hemoglobin, can make you feel tired and weak. There are many forms of anemia, each with its own cause."
      );
      setPrecaution("Eat iron-rich foods which also contain Vitamin C in them, Avoiding exposure to certain chemicals, Taking good care of your teeth and going to the dentist regularly, Getting regular exercise");
      setMedicine("Ferrous sulfate is the mainstay treatment for treating patients with iron deficiency anemia. They should be continued for about 2 months after correction of the anemia and its etiologic cause in order to replenish body stores of iron. Ferrous sulfate is the most common and cheapest form of iron utilized.")
    }
    else if (disease === "heart attack") {
      setDescription("Heart attack signs and symptoms in men and women: Chest pain or discomfort; Shortness of breath; Pain or discomfort in the jaw, neck, back, arm, or shoulder; Feeling nauseous, light-headed, or unusually tired")
      setPrecaution("Choose Healthy Foods and Drinks. Choose healthy meals and snacks to help prevent heart disease and its complications.Keep a Healthy Weight. People with overweight or obesity have a higher risk for heart disease.Get Regular Physical Activity.Don't Smoke");
      setMedicine("Take nitroglycerin, if prescribed. If you think you're having a heart attack")
    }
    if (disease === "Diabetes") {
      setDescription("Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy")
      setPrecaution("Don't smoke Keep your blood pressure and cholesterol under control. Schedule regular physicals and eye exams.Keep your vaccines up to date. ...");
      setMedicine("Metformin (Fortamet, Glumetza, others) is generally the first medicine prescribed for type 2 diabetes. It works mainly by lowering glucose production in the liver and improving the body's sensitivity to insulin so it uses insulin more effectively.")
    }
    if (disease === "Brain stroke") {
      setDescription("There are two main causes of stroke: a blocked artery (ischemic stroke) or leaking or bursting of a blood vessel (hemorrhagic stroke). Some people may have only a temporary disruption of blood flow to the brain, known as a transient ischemic attack (TIA), that doesn't cause lasting symptoms.")
      setPrecaution("Watch the amount of saturated fat, fried foods, and sugar you eat. Your doctor may suggest gentle exercise, too. Ask what might be safe for you.");
      setMedicine("An IV injection of recombinant tissue plasminogen activator (TPA) — also called alteplase (Activase) or tenecteplase (TNKase) — is the gold standard treatment for ischemic stroke. An injection of TPA is usually given through a vein in the arm within the first three hours.")
    }
  };
  
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center font-serif">
        <div>
          <Sidebar />
        </div>
        <div className="flex justify-center mx-52 px-16 py-16 text-[#090E40] w-3/4 h-5/6 rounded-xl bg-indigo-400">
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
              className=" h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
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
            <div className="m-10 font-bold text-[#000000] text-xl">
              Medicines:
              <br />
              {medicine}
            </div>
          </div>
        </div>
      </div>
      {/* <Chat /> */}
    </div>
  );
}
