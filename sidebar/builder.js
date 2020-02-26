import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Builder = props => {
  const Container = styled.div`
    position: absolute;
    left: 50%;
    border: 1px solid black;
    padding: 50px;
  `;
  console.log(props, "builder props");
  return <Container>hello</Container>;
};
const mapStateToProps = state => {
  console.log(state);
};

export default connect(mapStateToProps, {})(Builder);
