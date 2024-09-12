import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import i18n from "./utils/i18n.jsx";
import { LanguageContextProvider } from "./Context/LanguageContext.jsx";
import LanguageSelect from "./Components/LanguageSelect.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageContextProvider>
      <App />
      <LanguageSelect />
    </LanguageContextProvider>
  </StrictMode>
);
