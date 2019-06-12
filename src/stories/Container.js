import React from 'react';
import CalciteThemeProvider from 'calcite-react/CalciteThemeProvider';

//
// This is the wrapper for all our stories
//

const Container = ({ story }) => {
  return <CalciteThemeProvider>{story()}</CalciteThemeProvider>;
};

export default Container;
