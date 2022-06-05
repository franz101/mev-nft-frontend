import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter
    // basename={optionalString}
    // getUserConfirmation={optionalFunc}
    // hashType={optionalString}
    >
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
