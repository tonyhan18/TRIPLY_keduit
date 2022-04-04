import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Reservation() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="section section-team text-center">
          <Container>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/koreanair.png").default}
                    ></img>
                    <h4 className="title">서울 → 프랑스</h4>
                    <p className="category text-info">대한항공</p>
                    <p className="description">
                      [출발]
                      <br />
                      2022-03-01 02:05 <br />
                      Saturday
                      <br />
                      <br />
                      [도착]
                      <br />
                      2022-03-04 02:05 <br />
                      Tuesday
                      <br />
                    </p>
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      type="submit"
                      value="Submit"
                      // onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      예약하기
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/koreanair.png").default}
                    ></img>
                    <h4 className="title">서울 → 프랑스</h4>
                    <p className="category text-info">대한항공</p>
                    <p className="description">
                      [출발]
                      <br />
                      2022-03-01 02:05 <br />
                      Saturday
                      <br />
                      <br />
                      [도착]
                      <br />
                      2022-03-04 02:05 <br />
                      Tuesday
                      <br />
                    </p>
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      type="submit"
                      value="Submit"
                      // onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      예약하기
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/koreanair.png").default}
                    ></img>
                    <h4 className="title">서울 → 프랑스</h4>
                    <p className="category text-info">대한항공</p>
                    <p className="description">
                      [출발]
                      <br />
                      2022-03-01 02:05 <br />
                      Saturday
                      <br />
                      <br />
                      [도착]
                      <br />
                      2022-03-04 02:05 <br />
                      Tuesday
                      <br />
                    </p>
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      type="submit"
                      value="Submit"
                      // onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      예약하기
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Reservation;
