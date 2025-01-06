import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: unset;
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize};
    background-color: ${({ theme }) => theme.colors.neutral.alabaster};
    color: ${({ theme }) => theme.colors.primary.marineBlue};
  }
  @media screen and (min-width: ${theme.layout.mobile}) {
    body {
      padding: 30px;
    }
    @media screen and (max-width: ${theme.layout.medium}) {
      body{
        overflow-x: hidden;
      }

    }
  }
`;

export default GlobalStyles;
