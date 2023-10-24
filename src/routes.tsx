import { createBrowserRouter } from "react-router-dom";
import { ReactUseWebSocket } from "./pages/ReactUseWebSocket";
import { ReactWebSocket } from "./pages/ReactWebSocket";

const reactUseWebSocketRoute = {
  path: "/",
  element: <ReactUseWebSocket />,
};

const reactWebSocketRoute = {
  path: "/react-websocket",
  element: <ReactWebSocket />,
};

export const appRouter = createBrowserRouter([
  reactUseWebSocketRoute,
  reactWebSocketRoute,
]);
