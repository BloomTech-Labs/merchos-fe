import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import { useDispatch } from "react-redux";

// actions
import { authModalController } from "../../store/actions/userInterface/authModalController";
import { toastController } from "../../store/actions/userInterface/toastActions";
import {
  openStoreMetaEditor,
  closeStoreMetaEditor,
} from "../../store/actions/userInterface/storeMetaInterface";

const NavBar = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #e3e6ec;
  padding: 10px 20px;
  box-shadow: ${(props) =>
    !props.visible ? "" : "0px 0px 14px rgba(0, 0, 0, 0.31)"};
  position: relative;
  transition: 0.2s;
  margin-top: ${(props) => (!props.visible ? "-110px" : "0px")};
  z-index: 6;
`;

const InnerNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-shadow: inset 1.69px 3.38px 3.37829px rgba(0, 0, 0, 0.25),
    inset -1.69px -3.38px 3.37829px rgba(255, 255, 255, 0.6);
  border-radius: 25px;
`;

const UserButton = styled.button`
  box-shadow: 3.38px 3.37829px 3.37829px rgba(0, 0, 0, 0.25),
    -3.387px -3.37829px 3.37829px rgba(255, 255, 255, 0.6);
  border-radius: 25px;
  border: 0px;
  font-size: 2.5rem;
  padding: 10px;
  font-family: Roboto;
  font-weight: medium;
  width: 150px;
  margin: 10px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.99);
    animation: buttonClick 0.235s forwards;
  }

  &:focus {
    outline: 0;
  }

  @keyframes buttonClick {
    0% {
      box-shadow: 3.38px 3.37829px 3.37829px rgba(0, 0, 0, 0.25),
        -3.387px -3.37829px 3.37829px rgba(255, 255, 255, 0.6);
    }
    100% {
      box-shadow: inset 3.38px 3.37829px 3.37829px rgba(0, 0, 0, 0.25),
        -3.387px -3.37829px 3.37829px rgba(255, 255, 255, 0.6);
    }
  }
`;

const OpenNav = styled.button`
  position: fixed;
  transition: 0.2s;
  top: ${(props) => (props.visible ? "-50px" : "0px")};
  right: 100px;
  border-radius: 0px 0px 25px 25px;
  border: 0px;
  padding: 10px;
  box-shadow: outset 1.69px 3.38px 3.37829px rgba(0, 0, 0, 0.25),
    inset -1.69px -3.38px 3.37829px rgba(255, 255, 255, 0.6);
  z-index: 4;
  cursor: pointer;
`;

const UserInput = ({ title, buttonHandler }) => {
  const clickHandler = () => {
    buttonHandler(title);
  };

  return (
    <UserButton type="button" onClick={clickHandler}>
      {title}
    </UserButton>
  );
};

const ShopNavBar = ({
  userAuthed,
  setSideBarDisplay,
  authModalActive,
  topVisible,
  setTopVisible,
}) => {
  const dispatch = useDispatch();

  // hides navigations if auth modal is active, the opposite if not
  useEffect(() => {
    if (!authModalActive) {
      setSideBarDisplay(true);
      setTopVisible(true);
    }
  }, [authModalActive]);

  // const [topVisible, setTopVisible] = useState(true)
  // function for the button/links
  const linkHandler = (action) => {
    if (action === "Preview") return previewButton();
    if (action === "Sign In") return dispatch(authModalController("open"));

    // Check if user is authenticated
    if (userAuthed) {
      // if they are, allow them to proceed
      // with their action passed in
      switch (action) {
        case "Back Office":
          Router.push("/dashboard");
          break;
        case "Save":
          dispatch(openStoreMetaEditor());
          break;
        case "Publish":
          dispatch(openStoreMetaEditor());
          break;
        default:
          break;
      }
    } else {
      // create toast of type 'auth'
      dispatch(toastController("auth"));
    }
  };

  // opens and closes the sidebar/navbar
  const previewButton = () => {
    dispatch(closeStoreMetaEditor());
    setSideBarDisplay((prevState) => {
      // if sidebar doesn't have the same bool as top nav bar
      if (prevState !== topVisible) {
        // return previous state
        return prevState;
        // else if the sidebar and top bar are the same, return the opposite
      } else if (prevState === topVisible) {
        // then return the opposite
        return !prevState;
      }
    });
    setTopVisible((prevState) => !prevState);
  };

  return (
    <NavBar visible={topVisible}>
      <InnerNavBar>
        <UserInput title="Back Office" buttonHandler={linkHandler} />
        <div>
          <UserInput title="Save" buttonHandler={linkHandler} />
          <UserInput title="Preview" buttonHandler={linkHandler} />
          <UserInput title="Publish" buttonHandler={linkHandler} />
        </div>
        <UserInput title="Sign In" buttonHandler={linkHandler} />
      </InnerNavBar>
      <OpenNav visible={topVisible} type="button" onClick={previewButton}>
        Exit Preview
      </OpenNav>
    </NavBar>
  );
};

export default ShopNavBar;
