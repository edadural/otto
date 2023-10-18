import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import Deneme from "./pages/Deneme";
import NotFound from "./pages/NotFound";
import { SignIn } from "./pages/auth/sign-in";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/deneme" element={<Deneme />} />
        {/* <Route exact path="/sign-in" element={<SignIn />} /> lazım olur belki daha sonradan bakarsın */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
