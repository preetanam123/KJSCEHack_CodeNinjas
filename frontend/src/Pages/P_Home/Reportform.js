// import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BsFillClipboard2PlusFill, BsFillClipboard2PulseFill, BsFillClipboard2DataFill } from 'react-icons/bs';


const SideBar = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <div className="flex">
            <Sidebar />
            <div className="top-0 left-0 h-screen w-16 flex flex-col
                        bg-white dark:bg-gray-900 shadow-lg mt-3">

           


                

                <Divider />
                <Divider />
                <a href="./bloodreport">
                    <SideBarIcon icon={<BsFillClipboard2PlusFill size="28" />} />
                </a>
                <Divider />



                {/* <a href="./heartreport">
                    <SideBarIcon icon={<BsFillClipboard2DataFill size="28" />} />
                    </a> */}


                <a href="./diabetesreport">
                    <SideBarIcon icon={<BsFillClipboard2PulseFill size="28" />} />

                </a>
                <Divider />
            </div>
        </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'report' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100 font-serif">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;