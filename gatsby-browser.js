import "./src/styles/global.css"

import React from 'react';
import ThemeContextProvider from './src/components/core/themeContext';
export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};