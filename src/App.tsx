import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";

function App() {
  return (
    <main className="main">
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
