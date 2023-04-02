import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import Landing from "./Pages/Landing/Landing";
import NavBar from "./Pages/P_Home/Navbar";
import Sidebar from "./Pages/P_Home/Sidebar";
import Personal from "./Pages/P_Home/Personal";
import Appointment from "./Pages/P_Home/Appointment";
import Reports from "./Pages/P_Home/Reports";
// import Chat from "./components/Chat";
import Laboratory from "./Pages/P_Home/Laboratory";
import Precautions from "./Pages/P_Home/Precautions";
// import Calender from "./Pages/P_Home/Calender";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Labform from "./Pages/P_Home/Labform";
import Diabetes from "./Pages/P_Home/Diabetes";
import Heart from "./Pages/P_Home/Heart";
import Brain from "./Pages/P_Home/Brain";
import Reportform from "./Pages/P_Home/Reportform";
import Bloodreport from "./Pages/P_Home/Bloodreport";
import Diabetesreport from "./Pages/P_Home/Diabetesreport";
import Heartreport from "./Pages/P_Home/Heartreport";
import Brainreport from "./Pages/P_Home/Brainreport";
import RoomPage from "./Pages/VideoCall/ROOM";
import HomePage from "./Pages/VideoCall/Video";

function App() {
  return (
    
    <Router>
      
      <Routes>
        
        <Route path="/" element = {<Dashboard />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/navbar" element = {<NavBar />}></Route>
        <Route path="/sidebar" element = {<Sidebar />}></Route>
        <Route path="/personal" element = {<Personal />}></Route>
        <Route path="/appointment" element = {<Appointment />}></Route>
        <Route path="/reports" element = {<Reports />}></Route>
        <Route path="/labo" element = {<Laboratory />} />
        {/* <Route path="/chat" element = { <Chat />} /> */}
        <Route path="/precautions" element = { <Precautions />} />
        <Route path="/dashboard" element = { <Dashboard />} />
        <Route path="/labform" element = { <Labform />} />
        <Route path="/diabetes" element = { <Diabetes />} />
        <Route path="/heart" element = { <Heart />} />
        <Route path="/brain" element = { <Brain />} />
        {/* <Route path="/calender" element = { <Calender />} /> */}
        <Route path="/dashboard" element = { <Dashboard />} />
        <Route path="/Video" element = {<HomePage/>} />
        <Route path ="/room/:roomId" element={<RoomPage/>} />
        <Route path="/reportform" element = { <Reportform />} />
        <Route path="/bloodreport" element = { <Bloodreport />} />
        <Route path="/diabetesreport" element = { <Diabetesreport />} />
        <Route path="/heartreport" element = { <Heartreport />} />
        <Route path="/brainreport" element = { <Brainreport />} />

      </Routes>
    </Router>
    
  );
}

export default App;
