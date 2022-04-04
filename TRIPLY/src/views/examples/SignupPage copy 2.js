import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [useremail, setUseremail] = React.useState("");
  const [userpw, setUserpw] = React.useState("");
  const [usertel, setUsertel] = React.useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log(useremail, userpw);
    history.push("/");
  };
  return (
    <>
      <ExamplesNavbar />
      <div
        className="section section-signup"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg11.jpg").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "100vh",
          font: "black",
        }}
      >
        <Container>
          <Col className="ml-auto mr-auto" md="4">
            <Card className="card-login card-plain">
              <Form className="form" onSubmit={handleSubmit}>
                <CardHeader className="text-center">
                  <div className="logo-container">
                    <img
                      alt="..."
                      src={require("assets/img/logo-TRIPLY.png").default}
                    ></img>
                  </div>
                  <CardTitle className="title-up" tag="h3">
                    SignUp
                  </CardTitle>
                </CardHeader>
                {/* Login FORM */}
                <CardBody>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
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
                      name="username"
                      placeholder="Your Name"
                      value={username}
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
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
                      name="usertel"
                      placeholder="Your phone"
                      value={usertel}
                      type="text"
                      onChange={(e) => setUsertel(e.target.value)}
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
                    회원가입하기
                  </Button>
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

          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/login"
              outline
              size="lg"
              tag={Link}
            >
              로그인하기
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
