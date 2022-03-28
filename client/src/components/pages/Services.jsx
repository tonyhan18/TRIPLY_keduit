import React from "react";
import { Container } from "../atoms/Global";
import styled from "styled-components";
import bgimg from "../../assets/images/img-2.jpg";

export default function Services() {
  return <ServicesBlock className="services">SERVICES</ServicesBlock>;
}

const ServicesBlock = styled(Container)`
  background-image: url(${bgimg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
`;
