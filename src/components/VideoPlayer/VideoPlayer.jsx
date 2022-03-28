import React, { useContext } from "react";
import { SocketContext } from "../../context/socket.context";
import { Text } from "@nextui-org/react";

export default function VideoPlayer() {
  const { name, callAccepted, callEnded, stream, call, myVideo, userVideo } =
    useContext(SocketContext);

  return (
    <div>
      {stream && (
        <div>
          <Text h3>{name || "Me"}</Text>
          <video playsInline muted ref={myVideo} autoPlay />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <Text h3>{call.name || "Guest"}</Text>
          <video playsInline muted ref={userVideo} autoPlay />
        </div>
      )}
    </div>
  );
}
