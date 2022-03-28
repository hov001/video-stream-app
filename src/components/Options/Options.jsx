import React, { useContext, useState } from "react";
import { Button, Container, Text, Input } from "@nextui-org/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { SocketContext } from "../../context/socket.context";

export default function Options({ children }) {
  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  console.log(me);
  return (
    <Container gap={1}>
      <form noValidate autoComplete="off">
        <Text h6>Account Info</Text>
        <Input
          label="Name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <CopyToClipboard text={me}>
          <Button color="primary">Copy your ID</Button>
        </CopyToClipboard>

        <Text h6>Make a call</Text>
        <Input
          label="ID to call"
          value={idToCall}
          onChange={(evt) => setIdToCall(evt.target.value)}
        />
        {callAccepted && !callEnded ? (
          <CopyToClipboard text={me}>
            <Button color="error" onClick={leaveCall}>
              Hang up
            </Button>
          </CopyToClipboard>
        ) : (
          <CopyToClipboard text={me}>
            <Button color="success" onClick={() => callUser(idToCall)}>
              Call
            </Button>
          </CopyToClipboard>
        )}
      </form>
      Options
      {children}
    </Container>
  );
}
