import styled, { css } from 'styled-components';

import { CalciteP } from 'calcite-react/Elements';

const StyledMetricContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 200px;
  background: ${props => props.color};
  color: #fff;
`;

const StyledMetricContent = styled.div`
  display: flex;
`;

const StyledMetricValue = styled.div`
  font-size: 3.5rem;
  font-weight: 300;
`;

const StyledMetricUnit = styled.div`
  padding: 0 0.25rem;
  font-size: 2rem;
  font-weight: 300;
  opacity: 0.5;

  ${props =>
    props.unitLength > 10 &&
    css`
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.2rem;
      flex: 0;
    `};
`;

const StyledMetricSeries = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledMetricDescription = styled.div`
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
  StyledMetricContainer,
  StyledMetricContent,
  StyledMetricValue,
  StyledMetricUnit,
  StyledMetricSeries,
  StyledMetricDescription,
  StyledDescriptionText
};
