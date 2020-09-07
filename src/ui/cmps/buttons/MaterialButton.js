import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

export default function MaterialButton({ children, color, customStyle = null, onClick, ...otherProps }) {

  if (!customStyle) {
    return (
      <ThemeProvider theme={theme}>
        <Button variant="contained" color={color}
          onClick={onClick} {...otherProps}>
          {children}
        </Button>
      </ThemeProvider>
    );
  }

  const ColorButton = withStyles({
    root: {
      backgroundColor: customStyle.bgColor,
      color: customStyle.color,
      transition: 'all 0.3s',
      boxShadow: customStyle.boxShadow,
      '&:hover': {
        backgroundColor: customStyle.bgHover,
        color: customStyle.hoverColor,
      },
    },
  })(Button);

  return (
    <ColorButton variant="contained" onClick={onClick} {...otherProps}>
      {children}
    </ColorButton>
  );
}