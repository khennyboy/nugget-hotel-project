import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./component/ScrolltoTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Provider>
        <ScrollToTop />
        <App />
      </Provider>
    </HelmetProvider>
  </StrictMode>,
);
