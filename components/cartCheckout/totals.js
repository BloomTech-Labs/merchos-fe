import React from 'react'

import styled from 'styled-components'

const CheckoutPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
`

const Totals = () => {
  return (
    <CheckoutPrice>
      <div>
        <h3>
          Items: <span>$130</span>
        </h3>
        <h4>
          SubTotal: <span>$130</span>
        </h4>
      </div>
      <div>
        <h3>
          Shipping: <span>$5</span>
        </h3>
        <h3>
          Items: <span>$0</span>
        </h3>
        <h3>
          Total: <span>$135</span>
        </h3>
      </div>
    </CheckoutPrice>
  )
}

export default Totals
