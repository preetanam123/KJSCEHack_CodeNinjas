import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import Landing from "./Pages/Landing/Landing";
import NavBar from "./Pages/P_Home/Navbar";
import Sidebar from "./Pages/P_Home/Sidebar";
import Personal from "./Pages/P_Home/Personal";
import Appointment from "./Pages/P_Home/Appointment";
import Reports from "./Pages/P_Home/Reports";
import Chat from "./components/Chat";
import Laboratory from "./Pages/P_Home/Laboratory";


function App() {
  return (
    
    <Router>
      
      <Routes>
        
        <Route path="/" element = {<Landing />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/navbar" element = {<NavBar />}></Route>
        <Route path="/sidebar" element = {<Sidebar />}></Route>
        <Route path="/personal" element = {<Personal />}></Route>
        <Route path="/appointment" element = {<Appointment />}></Route>
        <Route path="/reports" element = {<Reports />}></Route>
        <Route path="/labo" element = {<Laboratory />} />
        <Route path="/chat" element = { <Chat />} />
      </Routes>
    </Router>
    
  );
}

export default App;
