import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ShopBuilder = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

ShopBuilder.getInitialProps = ({ store }) => {
  return { store };
};

const mapStateToProps = state => {
  return {
    title: state.workspace.Page.title
  };
};

export default connect(mapStateToProps)(ShopBuilder);
