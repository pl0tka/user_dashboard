import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-primary: #b19191;
    --clr-white: #fff;
    --clr-grey-lighter: #f1f1f1;
    --clr-grey-light: #ddd;
    --clr-grey-medium-light: #d1d1d1;
    --clr-grey-medium: #b3b3b3;
    --clr-grey-dark: #333;
    
    --border-radius: 0.5rem;
    --letter-spacing: 0.5px;
    --container-max-width: 1400px;

    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;

    --text-sm: 0.875rem;
    --text-md: 1rem;
    --text-lg: 1.5rem;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: var(--letter-spacing);
  }
`;

export default GlobalStyle;
