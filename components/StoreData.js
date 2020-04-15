import React from "react";
import styled from "styled-components";
import Router from "next/router";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { IoIosSettings, IoIosAddCircle } from "react-icons/io";
import { createStore, editStore } from "../store/actions/storeActions";
import { useDispatch } from "react-redux";

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
  cursor: pointer;
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

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 10%;
  margin: 3%;
  cursor: pointer;
`;

const MenuItems = styled.div`
  max-width: 40%;
  margin-left: -200%;
`;

export default function StoreData(data) {
  const dispatch = useDispatch();
  function deleteStore() {
    const bool = confirm(
      "Are you sure that you would like to delete your store?"
    );
    if (bool == true) {
      console.log(data.props.id);
      axiosWithAuth()
        .delete(`/store/${data.props.store_url}`)
        .catch(error => {
          console.log(error);
        });
    } else {
      return null;
    }
  }

  function updateStore(e) {
    dispatch(
      editStore({
        storeName: data.props.store_name,
        storeUrl: data.props.store_url
      })
    );
    Router.push("/shopbuilder");
  }

  // onclick function for add a store button
  function addStore(e) {
    dispatch(createStore());
    console.log("clicked");
    Router.push("/shopbuilder");
  }

  // on click to display menu items
  function DisplayMenuItems(e) {
    e.preventDefault();
    if (document.getElementById("menu-items").style.display === "none") {
      document.getElementById("menu-items").style.display = "flex";
    } else {
      document.getElementById("menu-items").style.display = "none";
    }
  }

  return (
    <div>
      <CardHolder>
        <StoreName>
          {data.props.store_name}
          {/* We need to send them to already built store so user can edit*/}
        </StoreName>
        <Card>
          <Menu onClick={DisplayMenuItems}>
            <IoIosSettings size="4rem" color="#fff" />
            <MenuItems id="menu-items" style={{ display: "none" }}>
              <li>
                <EditBtn onClick={updateStore}>Edit</EditBtn>
                <ShareBtn>Share</ShareBtn>
                <DeleteBtn onClick={deleteStore}>Delete</DeleteBtn>
              </li>
            </MenuItems>
          </Menu>
        </Card>
      </CardHolder>
      <AddNewBtn onClick={addStore}>
        <IoIosAddCircle cursor="pointer" size="4rem" color="#0047FF" />
        New Store
      </AddNewBtn>
    </div>
  );
}
