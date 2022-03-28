import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/Global";
import myImg from "../../assets/images/img-8.jpg";

export default function Signup() {
  return <SignupBlock className="sign-up">Signup</SignupBlock>;
}

const SignupBlock = styled(Container)`
  background-image: url(${myImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
`;
