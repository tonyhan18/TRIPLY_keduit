import LoginContext from "contexts/login";

import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoginCheck = () => {
  const { isLogin } = useContext(LoginContext);
  const history = useHistory();
  useEffect(() => {
    if (!isLogin) {
      history.push("/login");
    }
  }, [isLogin, history]);
  return <></>;
};

export default LoginCheck;
