import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;
    }

    html {
        height: 100%;
        width: 100%;
        &, * {
            margin: 0;
            padding: 0;
            border: none;
            box-shadow: none;
        }
    }

    body {
        background-color: #8c2222;
        &, button, input {
            font: 1rem/1.2 'Marvel', sans-serif;
        }
    }
`;

export default GlobalStyle;