import styled from 'styled-components';

import Panel from 'calcite-react/Panel';
import { CalciteH3, CalciteP } from 'calcite-react/Elements';

const StyledGoalHeader = styled(Panel)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.palette.lightestGray};
`;

const StyledIconContainer = styled.div`
  flex: 0 0 120px;
  height: 120px;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
`;

const StyledHeaderText = styled(CalciteH3)`
  margin: 0;
`;

const StyledSubheader = styled(CalciteP)`
  margin: 0 0 0.5rem;
`;

export {
  StyledGoalHeader,
  StyledIconContainer,
  StyledContentContainer,
  StyledHeaderText,
  StyledSubheader
};
