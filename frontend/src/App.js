import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/P_Home/Navbar";

function App() {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/navbar" element = {<NavBar />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
