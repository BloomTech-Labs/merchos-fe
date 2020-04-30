import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const CheckoutPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  border: 1px solid black;
  margin-right: 1%;
  padding: 10px 25px;
  position: sticky;
  top: 15px;
`

const SubTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 25px;
  margin: 25px;
  width: 100%;

  h3 {
    padding: 5px;
    font-size: 2.5rem;
  }

  h4 {
    padding: 10px 0px;
    font-weight: bold;
  }
`

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 2.5rem;

  .final-total {
    font-weight: bold;
    padding-bottom: 15px;

    span {
      color: blue;
    }
  }
`

const Totals = () => {
  const { checkout } = useSelector((state) => state.cartCheckoutReducer)
  return (
    <CheckoutPrice>
      <SubTotalWrapper>
        <h4>
          Subtotal: <span>${checkout.subTotal}</span>
        </h4>
        <h3>
          Shipping: <span>${checkout.shipping}</span>
        </h3>
        <h3>
          Tax: <span>${checkout.taxes}</span>
        </h3>
      </SubTotalWrapper>
      <TotalWrapper>
        <h3 className='final-total'>
          Total: <span>${checkout.total}</span>
        </h3>
      </TotalWrapper>
    </CheckoutPrice>
  )
}

export default Totals
