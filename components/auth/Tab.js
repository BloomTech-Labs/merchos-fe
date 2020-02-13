import React from 'react'

const Tab = ({children, tabHandler}) => {
    return (
        <li onClick={() => tabHandler(children)}>
            {children}
        </li>
    )
}

export default Tab
