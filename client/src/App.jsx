import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Home from "./layouts/Home";
import NotFound from "./layouts/NotFound";
import { SignIn } from "./pages/auth/sign-in";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/home" element={<Home/>} />
        {/* <Route exact path="/sign-in" element={<SignIn />} /> lazım olur belki daha sonradan bakarsın */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
