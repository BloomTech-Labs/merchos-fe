import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import { IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'

import ItemList from '../components/ItemListCheckout'
import Totals from '../components/cartCheckout/totals'

const Head = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0px 0px;
`

const Link = styled.h3`
  font-size: 2rem;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  color: #0751ff;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #000000;
`

const Items = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  display: flex;
  justify-content: start;
  margin-top: 1%;
  margin-left: 2%;
  color: #000000;
  padding-bottom: 10px;
`

const ItemContainer = styled.div`
  margin-top: 1%;
  margin-left: 2%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  `
  
  const InnerContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`

const TestCheckout = () => {
  const cart = useSelector((state) => state.cartCheckoutReducer.cart)
  return (
    <div>
      <Head>
        <Link onClick={() => window.history.back()}>
          <IoIosArrowBack size='4rem' color='#0751ff' />
          Back To Shop
        </Link>
        <Title>Checkout</Title>
      </Head>
      <Content>
        <Items>Items:</Items>
        <InnerContent>
          <div>
            <ItemContainer>
              {cart.length > 0
                ? cart.map((item) => (
                    <ItemList key={item.itemIdInCart} data={item} />
                  ))
                : 'Your cart is empty'}
            </ItemContainer>
          </div>
          <Totals />
        </InnerContent>
      </Content>
    </div>
  )
}

export default TestCheckout
