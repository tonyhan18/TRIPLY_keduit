import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import { Link, useHistory } from "react-router-dom";
import { Instance } from "api";
import LoginContext from "contexts/login";

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [useremail, setUseremail] = React.useState("");
  const [userpw, setUserpw] = React.useState("");
  const history = useHistory();
  const { setIsLogin } = React.useContext(LoginContext);

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(useremail, userpw);

    try {
      const params = {
        useremail,
        userpw,
      };
      const { data } = await Instance.post("/users/login", params);
      // localStorage.token = token;
      //console.log(success, token);
      if (data.success === true) {
        setUseremail("");
        setUserpw("");
        //Instance.default.headers.common["Authorization"] = token;
        setIsLogin({ isLogin: true, useremail: useremail });
        // alert("멈춰!");
        history.push("/");
      } else {
        alert("로그인 실패!");
      }
    } catch (e) {
      alert("로그인 실패!!");
    }
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login.jpg").default + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form className="form">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/logo-TRIPLY.png").default}
                      ></img>
                    </div>
                  </CardHeader>
                  {/* Login FORM */}
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="useremail"
                        placeholder="Your Email"
                        value={useremail}
                        type="text"
                        onChange={(e) => setUseremail(e.target.value)}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="userpw"
                        placeholder="Your Password"
                        value={userpw}
                        type="password"
                        onChange={(e) => setUserpw(e.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      type="submit"
                      value="Submit"
                      // onClick={(e) => e.preventDefault()}
                      onClick={handleSubmit}
                      size="lg"
                    >
                      로그인하기
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <Link to="/signup" className="link">
                          회원가입
                        </Link>
                      </h6>
                    </div>
                    {/* <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div> */}
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
