import { BrowserRouter, Routes, Route } from "react-router-dom";
//import LoginCheck from "./components/organisms/LoginCheck";
import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Signup from "./components/pages/Signup";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginCheck />}> */}
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<Services />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
