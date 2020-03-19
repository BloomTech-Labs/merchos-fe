import React from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { IoIosSettings, IoIosAddCircle } from "react-icons/io";

const Container = styled.div`
  width: 85%;
  padding-right: 3%;
  margin-right: 5%;

  background: #f3f3ff;
  box-shadow: inset -2px -2px 6px 2px #fff, inset 2px 2px 6px 2px #787878;
  border-radius: 75px 75px 0px 0px;

  z-index: -2;
`;
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  padding-top: 2%;
`;

const StoreName = styled.h2`
  font-size: 2rem;
  font-style: bold;
  font-weight: 400;
  color: #fff;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 20px;
  margin: 10px;
  width: 391px;
  height: 284px;
  background-color: #000000;

  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 8px 2px #787878;
`;

const AddNewBtn = styled.button`
  height: 211px;
  width: 223px;
  border: solid blue 2px;
  border-radius: 30px;
  background: #f3f3ff;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  font-family: "'Roboto', sans-serif";

  font-size: 2rem;
`;

export default function StoreData(data) {
  function deleteStore() {
    const bool = confirm(
      "Are you sure that you would like to delete your store?"
    );
    if (bool == true) {
      console.log(data.props.id);
      axiosWithAuth()
        .delete(`/store/${data.props.store_name}`)
        .catch(error => {
          console.log(error);
        });
    } else {
      return null;
    }
  }

  return (
    <Container>
      <Title>Stores:</Title>
      <Card>
        <StoreName>
          {data.props.store_name}
          {/* We need to send them to already built store so user can edit*/}
          <IoIosSettings />
          <button
            className="edit-store"
            onClick={() => (window.location = "/storebuilder")}
          />
          <button className="delete-store" onClick={deleteStore}>
            x
          </button>
        </StoreName>
      </Card>
      <AddNewBtn>
        <IoIosAddCircle />
        New Store
      </AddNewBtn>
    </Container>
  );
}
