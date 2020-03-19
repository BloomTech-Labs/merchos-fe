import SideBar from "../components/SideBar";
import navButtons from "../config/buttons";
import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Store from "../components/StoreData";
import styled from "styled-components";

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
    <div>
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
              return <Store props={data} />;
            })}
      </Dashlayout>
    </div>
  );
}
