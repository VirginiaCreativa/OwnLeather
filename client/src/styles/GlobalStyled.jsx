import { createGlobalStyle } from 'styled-components';
import Variables from './VariableStyled';

const GlobalStyled = createGlobalStyle`
  body {
    background: ${Variables.body};
    font-family: 'Noto Sans TC', sans-serif !important;
  }
  a {
    text-decoration: none !important;
    :hover {
      text-decoration: none !important;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
    letter-spacing: -0.5px;
    color: ${Variables.black};
  }
  p,
  li,
  abbr {
    color: ${Variables.black};
    font-size: 0.9rem;
    font-weight: 300;
  }
  *:focus {
    outline: none !important;
    box-shadow: none !important;
  }
 
  input {
    caret-color: ${Variables.blue};
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  input,
  label,
  li,
  span {
    ::selection {
      background-color: ${Variables.gray_light};
      color: ${Variables.blueCol};
    }
  }

  .activeBtnFilter {
    background-color: ${Variables.gray_2};
    color: ${Variables.gray_dark};
  }
  .css-yk16xz-control,
  .css-1pahdxg-control {
    border: none !important;
    box-shadow: none !important;
    padding: 2.5px;
    &:hover {
      border-color: none !important;
      box-shadow: transparent !important;
    }
    &:focus {
      box-shadow: transparent !important;
    }
  }
  .css-26l3qy-menu {
    position: relative;
    z-index: 99999;
    box-shadow: none !important;
    font-size: 0.8rem !important;
  }
  .css-1n7v3ny-option {
    border: none !important;
    background-color: ${Variables.gray_1} !important;
    color: ${Variables.gray_dark} !important;
    :hover {
      background-color: ${Variables.gray_1} !important;
      color: ${Variables.gray_dark} !important;
    }
  }
  .css-yt9ioa-option {
    :active {
      background-color: ${Variables.gray_light} !important;
      color: ${Variables.gray_dark} !important;
    }
  }
  .css-2b097c-container {
    position: relative;
  }
  .css-1uccc91-singleValue {
    font-size: 0.8rem !important;
  }
`;

export default GlobalStyled;
