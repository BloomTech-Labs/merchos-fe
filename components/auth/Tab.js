import React from 'react'
import styled from 'styled-components'

const TabStyle = styled.li`
    cursor: pointer;
    padding: 10px;
`

const Tab = ({children, tabHandler}) => {
    return (
        <TabStyle onClick={() => tabHandler(children)}>
            {children}
        </TabStyle>
    )
}

export default Tab
