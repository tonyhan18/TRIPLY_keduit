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
import styledComponents from "styled-components";

function ReservationItem({ flight }) {
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
    <ReservationBlock>
      {flight.map(
        (
          { airline, arrtime, deptime, flight, from, getenum, price, to },
          index
        ) => (
          <Col md="4">
            <div className="team-player">
              <img
                alt="..."
                className="rounded-circle img-fluid img-raised"
                src={require("assets/img/koreanair.png").default}
              ></img>
              <h4 className="title text-black">
                {from} → {to}
              </h4>
              <p className="category text-info">{airline}</p>
              <p className="text-black">
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
        )
      )}
    </ReservationBlock>
  );
}

const ReservationBlock = styledComponents.div`

`;

export default ReservationItem;
