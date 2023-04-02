import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import NavBar from "../../P_Home/Navbar";
import Sidebar from "../../P_Home/Labform";
const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 186069761;
    const serverSecret = "f86fa499f5b3629abde2216612c55b15";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Janvi"
    );
    const zc= ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({

        conatiner : element,
        sharedLinks:[
          {
            name : 'Copy Link',
            url:`http://localhost:3000/room/${roomId}`,

          }
        ],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true,

    });


};
  return <div className="flex flex-wrap">
                
  <div>
    <div ref = {myMeeting} />
  </div>;
  </div>
  //</NavBar>
};
export default RoomPage;
