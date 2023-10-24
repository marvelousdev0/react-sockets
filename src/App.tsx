import useWebSocket, { ReadyState } from "react-use-websocket";
import "./App.css";

const SOCKET_URL_ONE = "wss://echo.websocket.events";

function App() {
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
    <main className="main">
      <h1>Sockets Example</h1>
      <button onClick={() => sendMessage("Hello world!")}>Send Message</button>
      <section>
        <p>Socket state: {connectionStatus}</p>
        <p>Last message: {lastMessage?.data}</p>
      </section>
    </main>
  );
}

export default App;
