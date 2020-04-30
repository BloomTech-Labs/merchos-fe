import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { IoMdArrowBack, IoMdContact } from "react-icons/io";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { authorizeUser } from "../store/actions/userAuth/userAuthActions";

const Wrapper = styled.section`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  width: auto;
  height: 10%;
  padding-top: 1%;
  padding-left: 2%;
  padding-right: 6%;

  background: #f3f3ff;

  .log {
    display: none;
    transition: 0.5s;
  }
  .dropmenu {
    display: block;
    position: absolute;
  }
`;
const ProfileBtn = styled.button`
  width: 145px;
  height: 50px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: #565656;
  cursor: pointer;

  background: #f3f3ff;
  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 6px 2px #787878;
  border-radius: 55px;
`;
const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: light;
  // font-weight: 10;
  font-size: 50px;
  line-height: 73px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: #565656;
`;
const BackBtn = styled.button`
  width: 145px;
  height: 50px;

  background: #f3f3ff;
  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 6px 2px #787878;
  border-radius: 55px;
  cursor: pointer;

  font-family: "'Roboto', sans-serif";

  font-size: 2rem;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: #565656;
`;
const DropLogout = styled.h1`
  display: none;
  width: 150px;
  height: 40px;

  font-family: "'Roboto', sans-serif";
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;

  color: #871a04;

  background: #f3f3ff;
  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 6px 2px #787878;
  border-radius: 15px;
  z-index: -8;
`;

const Navbar = props => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authorizeUser("Log Out"));

    Router.push("/");
    console.log("logging out");
  };

  const [isHovering, setIsHovering] = useState(false);
  const hoveringState = () => {
    setIsHovering(!isHovering);
  };

  return (
    <Wrapper>
      <BackBtn onClick={()=>window.history.back()}>
        <IoMdArrowBack size="4rem" color="#565656" />
        Back
      </BackBtn>
      <Title>Back Office</Title>
      {/* <ProfileBtn> */}
      {/* <ProfileBtn onClick={Hidden}> */}

      {/* <label for="select">Hello</label>
                <div className="select"> */}
      <ul
        className="prof"
        onMouseEnter={hoveringState}
        onMouseLeave={hoveringState}
      >
        <li>
          <ProfileBtn>
            {" "}
            Account
            <IoMdContact size="4rem" color="#565656" />
          </ProfileBtn>
        </li>
        <li className={`log ${isHovering === true ? "dropmenu" : ""}`}>
          <DropLogout type="button" id="hide" value="1" onClick={logout}>
            Sign Out
          </DropLogout>
        </li>
      </ul>
      {/* </div> */}

      {/* </ProfileBtn> */}
    </Wrapper>
  );
};

export default Navbar;
