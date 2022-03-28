import React from "react";
import { Container } from "../atoms/Global";
import styled from "styled-components";
import bgimg from "../../assets/images/img-1.jpg";

export default function Products() {
  return <ProductsBlock className="products">PRODUCTS</ProductsBlock>;
}

const ProductsBlock = styled(Container)`
  background-image: url(${bgimg});
  background-position: center;
  background-size: fill;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
`;
