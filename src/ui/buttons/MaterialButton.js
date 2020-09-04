import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  },
});

export default function MaterialButton({ children, color, onClick }) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color={color}
        onClick={onClick}>
        {children}
      </Button>
    </ThemeProvider>
  );
}