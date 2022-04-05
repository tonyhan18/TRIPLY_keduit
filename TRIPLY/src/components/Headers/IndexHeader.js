/*eslint-disable*/
import { Instance } from "api";
import Reservation from "components/Reservation";
import Selection from "components/Selection";
import LoginContext from "contexts/login";
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import styled from "styled-components";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();
  const { isLogin, useremail } = React.useContext(LoginContext);
  const [flight, setFlight] = React.useState([]);
  const [start, setStart] = React.useState({});
  const [end, setEnd] = React.useState({});

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const searchFlight = async (deptime, arrtime, airline, start, end) => {
    setStart(start);
    setEnd(end);
    try {
      const params = {
        deptime: deptime,
        arrtime: arrtime,
        airline: airline,
        useremail: "ourclub7279@gmail.com",
      };
      const { data } = await Instance.post("/flight/search", params);
      if (!data.success) {
        alert("정보가 없습니다");
      } else {
        setFlight(data.flight);
      }
    } catch (e) {
      console.log("실패!");
    }
  };

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logo-TRIPLY.png").default}
            ></img>
            <h3>사람과 여행, 여행과 운명이 만나는 곳</h3>
          </div>

          <h6 className="category category-absolute">
            <Selection searchFlight={searchFlight} />

            {/* Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
            
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png").default}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png").default}
              ></img>
            </a>
            . */}
          </h6>
          {flight.length != 0 ? (
            <ReservationWrapper>
              <Reservation flight={flight} start={start} end={end} />
            </ReservationWrapper>
          ) : (
            <></>
          )}
        </Container>
      </div>
    </>
  );
}

const ReservationWrapper = styled.div`
  position: relative;
  margin-top: 35rem;
`;

export default IndexHeader;
