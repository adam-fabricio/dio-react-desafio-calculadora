import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*   {
    margin:0;
    padding: 0
    color: ${props => (props.darkMode ? "white" : "black")};
    }`