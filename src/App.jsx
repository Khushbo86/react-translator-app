import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TranslatorPage from "./pages/TranslatorPage";
import RandomPage from "./pages/RandomPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/random" element={<RandomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;