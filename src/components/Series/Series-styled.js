import styled from 'styled-components';

import Panel from 'calcite-react/Panel';

const StyledSeriesContainer = styled(Panel)`
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: ${props => props.theme.boxShadow2};

  &:first-child {
    margin-top: 0;
  }

  .fact-value,
  .fact-year {
    font-weight: bold;
  }
`;

export { StyledSeriesContainer };
