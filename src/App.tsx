import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavFooter from "./component/NavFooter";
import EachRoom from "./component/EachRoom";

function App() {
  return (
    <BrowserRouter>
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
