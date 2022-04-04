import { createContext } from "react";

const LoginContext = createContext({
  isLogin: false,
  useremail: "",
  setIsLogin: () => {},
});

export default LoginContext;
