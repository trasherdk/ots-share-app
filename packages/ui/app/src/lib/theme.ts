import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../tailerwind.config';

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
const tailwindConfig = resolveConfig(tailwindConfigModule as any);

const theme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.colors.primary.main,
    },
    secondary: {
      main: tailwindConfig.theme.colors.primary.accent,
    },
    error: {
      main: tailwindConfig.theme.colors.primary.red,
    },
  },
});

export default theme;
