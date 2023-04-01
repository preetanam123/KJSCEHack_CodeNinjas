// import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BsFillHeartPulseFill, BsFillClipboard2PlusFill, BsFillClipboard2DataFill } from 'react-icons/bs';


const SideBar = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <div className="flex">
            <Sidebar />
            <div className="top-0 left-0 h-screen w-16 flex flex-col
                        bg-white dark:bg-gray-900 shadow-lg">
                <a href="./Brain">
                    <SideBarIcon icon={<BsFillClipboard2DataFill size="28" />} />
                </a>            
                <Divider />
                <a href="./Heart">
                    <SideBarIcon icon={<BsFillHeartPulseFill size="28" />} />
                </a>
                <Divider />
                <a href="./Diabetes">
                    <SideBarIcon icon={<BsFillClipboard2PlusFill size="28" />} />
                </a>
                {/* <SideBarIcon icon={<FaPoo size="20" />} /> */}
                <Divider />
                {/* <SideBarIcon icon={<BsGearFill size="22" />} /> */}
            </div>
        </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'form' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;