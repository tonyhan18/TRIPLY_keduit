import React from "react";
import styled from "styled-components";

// react plugins that creates an input with a date picker
import Datetime from "react-datetime";
// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

const SelectionBlock = styled.div`
  display: flex;
  border-radius: 15px;
  height: 300px;
  background-color: #f7f5f2;
  color: black;
  .info {
    margin-top: 40px;
    font-size: 14px;
  }
  .start {
    border-right: 1px solid #dfdfde;
    border-radius: 15px 0 0 15px;
    width: 30%;
  }
  .end {
    border-right: 1px solid #dfdfde;
  }
  .nav-item {
    height: 10%;
    .active {
      border: 5px solid transparent;
      border-radius: 10%;
      background-image: linear-gradient(#ff6b6b, #4d96ff);
    }
    .nav-link {
      height: 10%;
      cursor: pointer;
    }
  }
`;

const Selection = () => {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [pills, setPills] = React.useState("1");
  const [start, setStart] = React.useState({});
  const [end, setEnd] = React.useState({});

  const checkDay = (daytmp) => {
    switch (daytmp) {
      case 0:
        return "monday";
      case 1:
        return "tuesday";
      case 2:
        return "wednesday";
      case 3:
        return "thursday";
      case 4:
        return "friday";
      case 5:
        return "saturday";
      case 6:
        return "sunday";
    }
  };
  const handleStart = (e) => {
    const date = e._d.getDate();
    const hour = e._d.getHours();
    const min = e._d.getMinutes();
    const year = e._d.getFullYear();
    const month = e._d.getMonth();
    const daytmp = e._d.getDay(); //요일

    let day = checkDay(daytmp);

    setStart({
      year: year,
      month: month,
      date: date,
      day: day,
      hour: hour,
      min: min,
    });
    console.log(start);
  };

  const handleEnd = (e) => {
    const date = e._d.getDate();
    const hour = e._d.getHours();
    const min = e._d.getMinutes();
    const year = e._d.getFullYear();
    const month = e._d.getMonth();
    const daytmp = e._d.getDay(); //요일
    let day = checkDay(daytmp);

    setEnd({
      year: year,
      month: month,
      date: date,
      day: day,
      hour: hour,
      min: min,
    });
    console.log(end);
  };

  const handlePills = (e) => {};
  return (
    <SelectionBlock>
      <Col md="3" className="start">
        <h4>출발날짜</h4>
        <Row>
          <Col md="12">
            <div className="datepicker-container">
              <FormGroup>
                <Datetime
                  name="start"
                  inputProps={{ placeholder: "출발날짜를 선택해주세요" }}
                  dateFormat="YYYY년 MM월 DD일"
                  onChange={handleStart}
                />
              </FormGroup>
              {start.year == null ? (
                <></>
              ) : (
                <div className="info">
                  {start.year}-{start.month}-{start.date}
                  <br />
                  {start.day}
                  <br />
                  {start.hour}:{start.min}
                  <br />
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Col>
      <Col md="3" className="end">
        <h4>도착날짜</h4>
        <Row>
          <Col md="12">
            <div className="datepicker-container">
              <FormGroup>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "도착날짜를 선택해주세요" }}
                  onChange={handleEnd}
                />
              </FormGroup>
              {end.year == null ? (
                <></>
              ) : (
                <div className="info">
                  {end.year}-{end.month}-{end.date}
                  <br />
                  {end.day}
                  <br />
                  {end.hour}:{end.min}
                  <br />
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Col>
      <Col>
        <h4>항공사 선택</h4>
        <Nav
          className="nav-pills-info nav-pills-just-icons"
          pills
          role="tablist"
        >
          <NavItem className="nav-item">
            <NavLink
              className={pills === "1" ? "active nav-link" : "nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("1");
                handlePills();
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/koreanair.png").default}
              ></img>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={pills === "2" ? "active nav-link" : " nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("2");
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/asiana.png").default}
              ></img>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={pills === "3" ? "active nav-link" : " nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("3");
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/jinair.jpeg").default}
              ></img>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={pills === "4" ? "active nav-link" : " nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("4");
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/jejuair.png").default}
              ></img>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={pills === "5" ? "active nav-link" : " nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("5");
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/airbusan.png").default}
              ></img>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={pills === "6" ? "active nav-link" : " nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("6");
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/tway.jpeg").default}
              ></img>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={pills === "7" ? "active nav-link" : " nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("7");
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/eastar.png").default}
              ></img>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={pills === "8" ? "active nav-link" : " nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("8");
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/airseoul.png").default}
              ></img>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={pills === "9" ? "active nav-link" : " nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("9");
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/airpremier.png").default}
              ></img>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              className={pills === "10" ? "active nav-link" : " nav-link"}
              onClick={(e) => {
                e.preventDefault();
                setPills("10");
              }}
            >
              <img
                alt="..."
                className="rounded-circle img-raised"
                src={require("assets/img/aerok.png").default}
              ></img>
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
      {/* <div className="section section-javascript" id="javascriptComponents">
        <Container>
          <h3 className="title">Javascript components</h3>
          <Row id="modals">
            <Col md="6">
              <h4>Modal</h4>
              <Button
                color="primary"
                className="mr-1"
                onClick={() => setModal1(true)}
              >
                Launch Modal
              </Button>
              <Button color="info" onClick={() => setModal2(true)}>
                Launch Modal Mini
              </Button>
              <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Modal title</h4>
                </div>
                <ModalBody>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="default" type="button">
                    Nice Button
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              <Modal
                modalClassName="modal-mini modal-info"
                toggle={() => setModal2(false)}
                isOpen={modal2}
              >
                <div className="modal-header justify-content-center">
                  <div className="modal-profile">
                    <i className="now-ui-icons users_circle-08"></i>
                  </div>
                </div>
                <ModalBody>
                  <p>Always have an access to your profile</p>
                </ModalBody>
                <div className="modal-footer">
                  <Button className="btn-neutral" color="link" type="button">
                    Back
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </Col>
            <Col md="6">
              <h4>Popovers</h4>
              <Button
                color="default"
                id="tooltip175489643"
                type="button"
                className="mr-1"
              >
                On left
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "top" : "left"}
                target="tooltip175489643"
                className="popover-primary"
              >
                <PopoverHeader>Popover On Left</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                id="tooltip768569110"
                type="button"
                className="mr-1"
              >
                On top
              </Button>
              <UncontrolledPopover placement="top" target="tooltip768569110">
                <PopoverHeader>Popover on Top</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                id="tooltip966745638"
                type="button"
                className="mr-1"
              >
                On right
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "bottom" : "right"}
                target="tooltip966745638"
              >
                <PopoverHeader>Popover on Right</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                  <br /> Here will be some very useful information about his
                  popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button color="default" id="tooltip822900491" type="button">
                On bottom
              </Button>
              <UncontrolledPopover placement="bottom" target="tooltip822900491">
                <PopoverHeader>Popover on Bottom</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
            <br></br>
            <br></br>
            <Col md="6">
              <h4>Datepicker</h4>
              <Row>
                <Col md="6">
                  <div className="datepicker-container">
                    <FormGroup>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                      />
                    </FormGroup>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <h4>Tooltips</h4>
              <Button
                className="btn-tooltip mr-1"
                color="default"
                id="tooltip116884155"
                type="button"
              >
                On left
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="left"
                target="tooltip116884155"
              >
                Tooltip on left
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip mr-1"
                color="default"
                id="tooltip502327420"
                type="button"
              >
                On top
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="tooltip502327420"
              >
                Tooltip on top
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip mr-1"
                color="default"
                id="tooltip243887155"
                type="button"
              >
                On bottom
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="bottom"
                target="tooltip243887155"
              >
                Tooltip on bottom
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip"
                color="default"
                id="tooltip542703310"
                type="button"
              >
                On right
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="tooltip542703310"
              >
                Tooltip on right
              </UncontrolledTooltip>
              <div className="clearfix"></div>
              <br></br>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div> */}
    </SelectionBlock>
  );
};

export default Selection;