import useWebSocket, { ReadyState } from "react-use-websocket";

const SOCKET_URL_ONE = "wss://echo.websocket.events";

export const ReactUseWebSocket = () => {
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    SOCKET_URL_ONE,
    {
      shouldReconnect: () => true,
      reconnectAttempts: 10,
      reconnectInterval: 3000,
    }
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  console.log(readyState, lastMessage);

  return (
    <>
      <h1>Sockets Example</h1>
      <h3>react-use-websocket</h3>
      <button onClick={() => sendMessage("Hello world!")}>Send Message</button>
      <section>
        <p>Socket state: {connectionStatus}</p>
        <p>Last message: {lastMessage?.data}</p>
      </section>
    </>
  );
};
