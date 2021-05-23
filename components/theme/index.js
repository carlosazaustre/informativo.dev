import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap');

:root {
  --color-primary: #ff6600;
  --color-secondary: #606060;
  --color-tertiary: #f8f8f8;
  --color-white: #ffffff;
  --color-black: #4f4f4f;
  --color-gray: #8f8f8f;

  --font-size-title: 16pt;
  --font-size-subtitle: 9pt;
  --border-radius-md: 10px;
}

body {
  font-family: 'Roboto';
}
`;

const ThemingProvider = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemingProvider;
