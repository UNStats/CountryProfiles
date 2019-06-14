import { CalciteTheme } from 'calcite-react/CalciteThemeProvider';

const unTheme = {
  ...CalciteTheme,
  type: {
    ...CalciteTheme.type,
    avenirFamily:
      '"Roboto", "Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif'
  },
  boxShadow2:
    '0px 1px 5px 0px rgba(0,0,0,0.1), 0px 2px 2px 0px rgba(0,0,0,0.09), 0px 3px 1px -2px rgba(0,0,0,0.08)',
  boxShadow3:
    '0px 1px 8px 0px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 3px 3px -2px rgba(0,0,0,0.12)'
};

export { unTheme };
