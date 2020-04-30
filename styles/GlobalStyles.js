import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        font-family: "Roboto", sans-serif;
    }
    button {
        border: 0px;
    }
`
