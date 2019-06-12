import styled from 'styled-components';
import { unitCalc } from 'calcite-react/utils/helpers';

export const StyledAppHeader = styled.div`
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 2, '/')};
  display: flex;
`;
