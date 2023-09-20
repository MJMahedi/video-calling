import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


const RoomPage = () => {

    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1665024215;
        const serverSecret = "f72f456f646d83a45b411050ea5d004b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "MJ"
           );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Personal Link",
                    url:  window.location.protocol + `//localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        });
    };




    return (
        <div>
            <div 
            className="myCallContainer"
            style={{ width: '100vw', height: '100vh' }}

            ref={myMeeting} />
        </div>
    );
}
export default RoomPage;