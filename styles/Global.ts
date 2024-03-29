import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Crete Round', serif;
        font-size: 16px;
        min-height: 100vh;
        background: url('resources/paper/white_wall.webp') repeat;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`