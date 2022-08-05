import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import DogProvider from "./context/DogProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DogProvider>
    <App />
  </DogProvider>
);
