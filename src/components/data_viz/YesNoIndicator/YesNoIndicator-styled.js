import styled from 'styled-components';

import { CalciteP } from 'calcite-react/Elements';

const StyledBoolContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 150px;
  background: ${props => props.color};
  color: #fff;
`;

const StyledBoolContent = styled.div`
  display: flex;
`;

const StyledBoolValue = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
`;

const StyledBoolSeries = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBoolDescription = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const StyledDescriptionText = styled(CalciteP)`
  margin: 0;
  font-size: 1.2rem;
  width: 100%;
`;

export {
  StyledBoolContainer,
  StyledBoolContent,
  StyledBoolValue,
  StyledBoolSeries,
  StyledBoolDescription,
  StyledDescriptionText
};
