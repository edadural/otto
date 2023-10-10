import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Deneme from "./pages/Deneme";
import Login from "./pages/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deneme" element={<Deneme />} />
        <Route path="/deneme2" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
