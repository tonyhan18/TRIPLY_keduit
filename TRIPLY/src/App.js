import Router from "./Router";
import LoginContext from "./contexts/login";
import { useState } from "react";
import { Instance } from "api";

function App() {
  // useContext에 로그인정보 담기
  // const { token } = localStorage;
  // if (token) {
  //   Instance.defaults.headers.common["Authorization"] = token;
  // }

  // const [isLogin, setIsLogin] = useState(!!token);
  const [isLogin, setIsLogin] = useState(false);
  const [useremail, setUseremail] = useState("");
  const value = {
    isLogin,
    useremail,
    setIsLogin: ({ isLogin, useremail }) => {
      setIsLogin(isLogin);
      setUseremail(useremail);
    },
  };
  return (
    <LoginContext.Provider value={value}>
      <Router />
    </LoginContext.Provider>
  );
}

export default App;
