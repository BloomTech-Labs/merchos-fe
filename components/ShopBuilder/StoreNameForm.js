import React, { useState } from "react";
import { connect } from "react-redux";
import { changeStoreNameAction } from "../../store/actions/ShopBuilderActions";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  background: blue;
  height: 100px;
  width: 90.8%;
`;

const Input = styled.input`
  min-width: 100%;
  width: ${props => props.width};
  border: none;
  font-size: 3rem;
  background: transparent;
`;

const Form = styled.form`
  display: ${props => (props.displayName ? "none" : "static")};
`;

const StoreNameForm = props => {
  const [storeName, setStoreName] = useState();

  const handleChange = e => {
    setStoreName(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    props.changeStoreNameAction(storeName);
    axios
      .post("https://merchos-be.herokuapp.com/store", {
        name: storeName,
        url: `http://www.SwagDragon.net/${storeName}`
      })
      .then(res => {
        console.log("successfully posted");
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  };
  return (
    <Container>
      <Form onSubmit={submit}>
        <Input
          type="text"
          value={storeName}
          name="store"
          onChange={handleChange}
          placeholder="Click To Change Store Name"
        />
      </Form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    storeName: state.workspace.Page.storeName
  };
};

export default connect(mapStateToProps, { changeStoreNameAction })(
  StoreNameForm
);
