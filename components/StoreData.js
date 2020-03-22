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
  color: #0047ff;
  text-decoration: underline;
`;

const StoreName = styled.h2`
  font-size: 2rem;
  font-style: bold;
  font-weight: 400;
  color: #000000;
  padding-bottom: 2%;
`;

const CardHolder = styled.div`
  height: 300px;
  width: 360px;
  margin-left: 11%;
  margin-top: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: #f3f3ff;
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-left: 20px;
  // margin-left: 10px;
  width: 360px;
  height: 280px;
  background-color: #000000;

  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 8px 2px #787878;

  .menu .menu-items {
    background: #ddd;
    height: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    top: 35px;
    width: 100%;
  }

  .menu li:hover .menu-items {
    height: 200px;
    opacity: 1;
    transform: translateY(0);
  }
`;

const AddNewBtn = styled.button`
  height: 160px;
  width: 150px;
  margin-left: 20%;
  margin-top: 5%;

  border: solid #0047ff 3px;
  border-radius: 25px;
  background: #f3f3ff;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  font-family: "'Roboto', sans-serif";

  font-size: 2rem;
`;

const EditBtn = styled.button`
  height: 50px;
  width: 100px;
  color: #565656;
`;

const ShareBtn = styled.button`
  height: 50px;
  width: 100px;
  color: #565656;
`;

const DeleteBtn = styled.button`
  height: 50px;
  width: 100px;
  color: #565656;
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
      <CardHolder>
        <StoreName>
          {data.props.store_name}
          {/* We need to send them to already built store so user can edit*/}
        </StoreName>
        <Card>
          <ul className="menu">
            <li>
              <IoIosSettings size="4rem" color="#fff" />
            </li>
            <ul className="menu-items">
              <li>
                <EditBtn>Edit</EditBtn>
                <ShareBtn>Share</ShareBtn>
                <DeleteBtn onClick={deleteStore}>Delete</DeleteBtn>
              </li>
            </ul>
            {/* <button
            className="edit-store"
            onClick={() => (window.location = "/storebuilder")}
          />
          <button className="delete-store" onClick={deleteStore}>
            x
          </button> */}
          </ul>
        </Card>
      </CardHolder>
      <AddNewBtn onClick={() => (window.location = "/storebuilder")}>
        <IoIosAddCircle size="4rem" color="#0047FF" />
        New Store
      </AddNewBtn>
    </Container>
  );
}