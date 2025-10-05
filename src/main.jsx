import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SectionRefsProvider } from "./contexts/SectionRefsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SectionRefsProvider>
      <App />
    </SectionRefsProvider>
  </StrictMode>
);
