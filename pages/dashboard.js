import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import navButtons from "../config/buttons";
import Navbar from "../components/Navbar";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Store from "../components/StoreData";
import styled from "styled-components";
import Axios from "axios";

const Dashlayout = styled.section`
  display: flex;
  flex-direction: row;

  width: 100%;
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

      {/* <button
        className="create-store"
        onClick={() => (window.location = "/storebuilder")}
      /> */}
      <Dashlayout>
        <SideBar navButtons={navButtons} />

        {!store
          ? console.log(store)
          : store.map(data => {
              return <Store key={data.id} props={data} />;
            })}
      </Dashlayout>
    </div>
  );
}
