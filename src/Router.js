import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCheck from "./components/organisms/LoginCheck";
import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginCheck />}> */}
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
