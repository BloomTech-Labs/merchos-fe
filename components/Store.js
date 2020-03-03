import React from 'react'
import styled from 'styled-components'

const StoreCard = styled.div`

`
const StoreName = styled.h2`

`


export default function Store(data) {
    console.log(data.props.store_name)
    return (
        <StoreCard>
            <StoreName>
                ${data.props.store_name}
            </StoreName>
        </StoreCard>
    )
}
