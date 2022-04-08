import React from "react";

// reactstrap components
import {
  Button,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  // Container,
  // Row,
  // Col,
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter.js";
import styled from "styled-components";
import { Instance } from "api";

function Reservation({ flight, start, end }) {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
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

  const checkAirline = (airline) => {
    switch (airline) {
      case "KAL":
        return "koreanair";
      case "AAR":
        return "asiana";
      case "JNA":
        return "jinair";
      case "JJA":
        return "jejuair";
      case 4:
        return null;
      case 5:
        return null;
      case 6:
        return null;
      case 7:
        return null;
      default:
        return null;
    }
  };
  const handleReserve = async (
    flight,
    airline,
    from,
    to,
    start,
    end,
    price
  ) => {
    console.log(airline);
    try {
      const params = {
        useremail: "ourclub7279@gmail.com",
        flight,
        airlineid: airline,
        from,
        to,
        depdate: `${start.year}-${start.month}-${start.date}`,
        arrdate: `${end.year}-${end.month}-${end.date}`,
        deptime: `${start.hour}:${start.min}`,
        arrtime: `${end.hour}:${end.min}`,
        price,
      };
      const { data } = await Instance.post("/book/create", params);
      if (data.success) {
        alert("예약 성공했습니다");
      } else {
        alert("예약 실패했습니다");
      }
      console.log(data);
    } catch (e) {
      console.log("에러입니다.");
    }
  };

  return (
    <ReservationBlock>
      <div className="reserve-header">예약가능정보</div>
      <div className="reserve-body">
        {flight.map(
          (
            { airline, arrtime, deptime, flight, from, gatenum, price, to },
            id
          ) => (
            <div key={id} className="body-content">
              <div className="body-img">
                <img
                  alt="..."
                  className="circle-img"
                  src={
                    require("../../src/assets/img/" +
                      checkAirline(airline) +
                      ".png").default
                  }
                ></img>
              </div>
              <div className="body-text">
                <h4 className="title text-black">
                  {from} → {to}
                </h4>
                <p className="category text-info">항공편 : {flight}</p>
                <p>게이트번호 : {gatenum}</p>
                <p>가격 : {price}</p>
                <p className="">
                  [출발]
                  <br />
                  {start.year}-{start.month}-{start.date} {start.hour}:
                  {start.min} <br />
                  {start.day}
                  <br />
                  <br />
                  [도착]
                  <br />
                  {end.year}-{end.month}-{end.date} {end.hour}:{end.min} <br />
                  {end.day}
                  <br />
                </p>
                <Button
                  block
                  className="btn-round"
                  color="info"
                  type="submit"
                  value="Submit"
                  onClick={(e) =>
                    handleReserve(
                      flight,
                      airline,
                      from,
                      to,
                      start,
                      end,
                      gatenum,
                      price
                    )
                  }
                  size="lg"
                >
                  예약하기
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </ReservationBlock>
  );
}

const ReservationBlock = styled.div`
  width: 69.5rem;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .reserve-header {
    height: 3rem;
    margin: 1rem;
    font-size: 1.5rem;
    color: black;
  }
  .reserve-body {
    margin: 10px;
    /* height: 100%;
      width: 100vw; */
    display: flex;
    justify-content: center;
    align-items: center;

    /* border: 1px solid #000000; */
    width: 100%;
    overflow-x: scroll;
    /* overflow-y: hidden; */

    .body-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 0.7rem;
      width: 300px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      .body-img {
        object-fit: cover;
        object-position: top;
        overflow: hidden;
        border-radius: 50%;
        background-color: royalblue;
        width: 100px;
        height: 100px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      .body-text {
        display: block;
        color: black;
      }
    }
  }
`;

export default Reservation;
