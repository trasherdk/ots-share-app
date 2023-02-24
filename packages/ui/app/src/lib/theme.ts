import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../tailerwind.config';

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
const tailwindConfig = resolveConfig(tailwindConfigModule as any);

const theme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.colors.primary.light,
    },
    secondary: {
      main: tailwindConfig.theme.colors.primary.dark,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
