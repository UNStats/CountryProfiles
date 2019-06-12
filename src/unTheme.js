import { CalciteTheme } from 'calcite-react/CalciteThemeProvider';

const unTheme = {
  ...CalciteTheme,
  type: {
    ...CalciteTheme.type,
    avenirFamily:
      '"Roboto", "Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif'
  }
};

export { unTheme };
