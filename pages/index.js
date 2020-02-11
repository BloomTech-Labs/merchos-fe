import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const IndexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div``;

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
        <h1>Welcome to the World's Easiest Online-Shop Builder</h1>
        <div>
          <Link href='/'>
            <a>Start</a>
          </Link>
          <Link href='/'>
            <a>Sign In</a>
          </Link>
        </div>
        <ul>
          {listData.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </ContentWrapper>
    </IndexWrapper>
  );
};

export default Index;

const listData = [
  'Easiest Drag and Drop',
  'Create Products & Auto-shipment',
  'Built in Paypal & Credit Card Options',
  'Automatically Share to Social Media',
  "It's Free for Life!"
];
