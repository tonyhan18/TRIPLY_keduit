/*eslint-disable*/
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
            <Selection />

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
          <ReservationWrapper>
            <Reservation />
          </ReservationWrapper>
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
