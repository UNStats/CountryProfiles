import styled from 'styled-components';
import { CalciteP, CalciteH6 } from 'calcite-react/Elements';

const StyledTimeSeries = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDescriptionContainer = styled.div`
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.palette.lightestGray};
`;

const StyledDescriptionText = styled(CalciteP)`
  margin: 0;
  font-size: 1.2rem;
`;

const StyledChartSection = styled.div`
  display: flex;
`;

const StyledChart = styled.div`
  flex: 1 0 auto;
  height: 224px;
  padding-left: 10px;
`;

const StyledCrosshairTooltip = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
`;

const StyledCrosshairLabel = styled(CalciteP)`
  font-weight: 600;
  margin: 0;
  margin-right: 5px;
`;

const StyledCrosshairValue = styled(CalciteP)`
  margin: 0;
  white-space: nowrap;
`;

const StyledChartHeader = styled(CalciteH6)`
  margin: 0;
  text-align: center;
`;

export {
  StyledTimeSeries,
  StyledDescriptionContainer,
  StyledDescriptionText,
  StyledChartSection,
  StyledChart,
  StyledCrosshairTooltip,
  StyledCrosshairLabel,
  StyledCrosshairValue,
  StyledChartHeader
};
