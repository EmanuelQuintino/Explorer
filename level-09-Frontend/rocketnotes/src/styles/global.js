import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
        text-decoration: none;
    }

    bottom, a {
        cursor: pointer;
        transition: filter 200ms;
    }

    bottom:hover, a:hover {
        filter: brightness(0.9);
    }
`;