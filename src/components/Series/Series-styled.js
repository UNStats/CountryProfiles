import styled from 'styled-components';

import Panel from 'calcite-react/Panel';

const StyledSeriesContainer = styled(Panel)`
  margin-top: -1px;
  width: 100%;
  box-sizing: border-box;

  .fact-value,
  .fact-year {
    font-weight: bold;
  }
`;

export { StyledSeriesContainer };
