import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";

// Рендер приложений
ReactDOM.createRoot(
  document.querySelector("#medpult-contractor-treaty-root") as HTMLElement
).render(<App />);
