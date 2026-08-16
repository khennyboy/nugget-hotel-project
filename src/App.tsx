import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavFooter from "./component/NavFooter";
import EachRoom from "./component/EachRoom";
import ScrollToTop from "./component/ScrolltoTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NavFooter />}>
          <Route index element={<HomePage />} />
          <Route path="/Room/:number" element={<EachRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
