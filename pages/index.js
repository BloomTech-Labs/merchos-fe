import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const IndexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  font-family: 'Nunito', sans-serif;
  font-size: 3.4rem;
  line-height: 42px;
  width: 45%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

const Anchor = styled.a`
  font-family: 'Nunito', sans-serif;
  font-size: 2.75rem;
  text-decoration: none;
  padding: 22px 65px;
  margin: 24px;
  border-radius: 5px;
  cursor: pointer;

  &:first-child {
    color: white;
    background: #6dd3ff;
  }
  &:nth-child(2) {
    color: #6dd3ff;
    background: white;
    padding: 21px 64px;
    border: 1px solid #6dd3ff;
  }
`;

const ListInfo = styled.ul`
  padding-top: 55px;

  li {
    font-size: 2.4rem;
    font-family: 'Nunito', sans-serif;
    line-height: 148%;
  }
`;

const Index = () => {
  return (
    <IndexWrapper>
      <Head>
        <meta charSet='utf-8' />
        <title>MerchOS</title>
        <meta
          name='description'
          content='A simple, personalized, drag and drop store builder.'
        />
      </Head>
      <ContentWrapper>
        <Heading>Welcome to the World's Easiest Online-Shop Builder</Heading>
        <ButtonWrapper>
          {authButtons.map((link, i) => (
            <Link href={link.href} key={i}>
              <Anchor title={link.title}>{link.title}</Anchor>
            </Link>
          ))}
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

const authButtons = [
  {
    href: '/',
    title: 'Start!'
  },
  {
    href: '/',
    title: 'Sign In'
  }
];

const listData = [
  '- Easiest Drag and Drop',
  '- Create Products & Auto-shipment',
  '- Built in Paypal & Credit Card Options',
  '- Automatically Share to Social Media',
  "- It's Free for Life!"
];
