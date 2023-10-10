import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Deneme from "./pages/Deneme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deneme" element={<Deneme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
