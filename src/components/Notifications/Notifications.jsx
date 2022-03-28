import React, { useContext } from "react";
import { Button, Text } from "@nextui-org/react";
import { SocketContext } from "../../context/socket.context";

export default function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  console.log("name:::", call.name);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div>
          <Text h1>{call.name} is calling: </Text>
          <Button color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
}
