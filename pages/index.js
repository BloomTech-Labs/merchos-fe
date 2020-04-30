import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
// components
import AuthModal from "../components/auth/AuthModal";

// Redux actions
import { authModalController } from "../store/actions/userInterface/authModalController";

const IndexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 65px;
  width: 75.5%;
`;

const Heading = styled.h1`
  font-family: "Nunito", sans-serif;
  font-size: 3.4rem;
  line-height: 42px;
  width: 45%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

const Anchor = styled.div`
  height: 75px;
  font-family: "Nunito", sans-serif;
  font-size: 2.75rem;
  text-decoration: none;
  margin: 24px;
  cursor: pointer;

  &:first-child {
    a {
      padding: 30px;
      color: white;
      background: #6dd3ff;
      border-radius: 5px;
    }
  }
`;

const ListInfo = styled.ul`
  padding-top: 55px;

  li {
    font-size: 2.4rem;
    font-family: "Nunito", sans-serif;
    line-height: 148%;
  }
`;

const AuthButton = styled.button`
  font-family: "Nunito", sans-serif;
  font-size: 2.75rem;
  margin: 24px;
  border-radius: 5px;
  cursor: pointer;
  color: #6dd3ff;
  background: white;
  padding: 16px 64px;
  border: 1px solid #6dd3ff;
`;

const LinkStyle = styled.a`
  background: orange;
  height: 100%;
  width: 100%;
`;

const Index = () => {
  const { authModalActive } = useSelector(state => state.authInterface);
  const { userIsAuthed } = useSelector(state => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userIsAuthed == true) {
      Router.push("/dashboard");
    }
  }, [userIsAuthed]);

  return (
    <IndexWrapper>
      {authModalActive ? <AuthModal /> : null}
      <ContentWrapper>
        <Heading>Welcome to the World's Easiest Online-Shop Builder</Heading>
        <ButtonWrapper>
          <Anchor
            onClick={() => {
              localStorage.clear();
            }}
          >
            <Link href="/shopbuilder">
              <LinkStyle
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "block"
                }}
                title="Start!"
              >
                Start!
              </LinkStyle>
            </Link>
          </Anchor>
          <AuthButton
            type="button"
            onClick={() => dispatch(authModalController("open"))}
          >
            Sign In
          </AuthButton>
        </ButtonWrapper>
        <ListInfo>
          {listData.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ListInfo>
      </ContentWrapper>
    </IndexWrapper>
  );
};

export default Index;

export const listData = [
  "- Easiest Drag and Drop",
  "- Create Products & Auto-shipment",
  "- Built in Paypal & Credit Card Options",
  "- Automatically Share to Social Media",
  "- It's Free for Life!"
];
