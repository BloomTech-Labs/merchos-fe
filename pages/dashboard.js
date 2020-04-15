import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import navButtons from "../config/buttons";
import Navbar from "../components/Navbar";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Store from "../components/StoreData";
import styled from "styled-components";
import { createStore, editStore } from "../store/actions/storeActions";
import { useDispatch } from "react-redux";
import Axios from "axios";

const Dashlayout = styled.section`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const Container = styled.div`
  width: 85%;
  padding-right: 3%;
  margin-right: 5%;

  background: #f3f3ff;
  box-shadow: inset -2px -2px 6px 2px #fff, inset 2px 2px 6px 2px #787878;
  border-radius: 75px 75px 0px 0px;
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

export default function dashboard() {
  const [store, setStore] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/store")
      .then(response => setStore(response.data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ background: "#f3f3ff" }}>
      <Navbar />

      <Dashlayout>
        <SideBar navButtons={navButtons} />
        <Container>
          <Title>Stores:</Title>
          {!store
            ? console.log(store)
            : store.map(data => {
                return <Store key={data.id} props={data} />;
              })}
        </Container>
      </Dashlayout>
    </div>
  );
}
