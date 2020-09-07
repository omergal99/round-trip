import React from "react";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  direction: 'rtl',
});

export default function RtlWrapper({ children }) {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        {/* <div dir="rtl"> */}
          {children}
        {/* </div> */}
      </ThemeProvider>
    </StylesProvider>
  );
}