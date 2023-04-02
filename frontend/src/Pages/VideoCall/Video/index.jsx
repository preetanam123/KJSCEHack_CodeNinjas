import React , {useState,useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../P_Home/Labform';
import NavBar from '../../P_Home/Navbar';
const HomePage =() =>{

    const [value,setValue]=useState();
    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() =>{
       navigate(`/room/${value}`);
    },[navigate,value]);
  return(
    //<NavBar>
      //   <div className="flex flex-wrap">
        //        <Sidebar />
    <div>
      <NavBar />
      <div className='flex'>
        <Sidebar />
        <div className='m-auto'>     
        <input
        className='border-2 border-black m-2 rounded-lg'
      value={value} 
      onChange={(e)=> setValue(e.target.value)} 
      type="text" 
      placeholder="Enter Room code"/>
      <br />

      <button className='bg-black text-white rounded-xl m-4 w-20 mt-10 p-2' onClick={handleJoinRoom}>Join Call</button>
      </div>
      </div>
    </div>
   // </div>
    //</NavBar>
    );
};

export default HomePage;