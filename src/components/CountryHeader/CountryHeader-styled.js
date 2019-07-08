import styled, { css } from 'styled-components';

import { CalciteH2 } from 'calcite-react/Elements';
import { TabTitle } from 'calcite-react/Tabs';
import { TableCell } from 'calcite-react/Table';

const StyledCountryHeader = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
`;

const StyledImageCard = styled.div`
  width: 450px;

  ${props =>
    props.image &&
    css`
      background: url(${props.image});
      background-position: center;
      background-size: cover;
    `};
`;

const StyledDetailsCard = styled.div`
  padding: ${props => props.theme.baseline};
  flex: 1 0 auto;

  max-width: 100%;
  box-sizing: border-box;
`;

const StyledCountryTitle = styled(CalciteH2)``;

const StyledMetricsContainer = styled.div``;

const StyledMetric = styled.p`
  display: flex;
  align-items: center;
`;

const StyledMetricValue = styled.span`
  margin-left: 0.5rem;
`;

const SpacerDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const StyledTabTitle = styled(TabTitle)`
  flex: 1 0 auto;
  text-align: center;
`;

const StyledValueTableCell = styled(TableCell)`
  text-align: right;
  padding-right: 0;
`;

const StyledUnitTableCell = styled(TableCell)`
  color: ${props => props.theme.palette.darkGray};
`;

export {
  StyledCountryHeader,
  StyledImageCard,
  StyledDetailsCard,
  StyledCountryTitle,
  StyledMetricsContainer,
  StyledMetric,
  StyledMetricValue,
  SpacerDiv,
  StyledTabTitle,
  StyledValueTableCell,
  StyledUnitTableCell
};
