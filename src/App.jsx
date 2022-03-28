import "./App.css";
import { Container, Text, Row, Col } from "@nextui-org/react";
import { VideoPlayer, Options, Notifications } from "./components";
import { SocketContext, ContextProvider } from "./context/socket.context";

function App() {
  const {
    call,
    callAccepted,
    callEnded,
    myVideo,
    userVideo,
    stream,
    name,
    setName,
    me,
    answerCall,
    callUser,
    leaveCall,
  } = ContextProvider();

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        callEnded,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        me,
        answerCall,
        callUser,
        leaveCall,
      }}
    >
      <div className="App">
        <Container gap={0} sm style={{ marginTop: 50 }}>
          <Row gap={1}>
            <Col>
              <Text h2 style={{ textAlign: "center" }}>
                Video Live Chat
              </Text>
            </Col>
          </Row>
          <Row gap={1}>
            <Col>
              <VideoPlayer />
            </Col>
          </Row>
          <Row gap={1}>
            <Col>
              <Options>
                <Notifications />
              </Options>
            </Col>
          </Row>
        </Container>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
