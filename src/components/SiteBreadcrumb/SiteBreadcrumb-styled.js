import styled from 'styled-components';
import { unitCalc } from 'calcite-react/utils/helpers';

export const StyledBreadcrumbsWrapper = styled.div`
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')}
    ${props => unitCalc(props.theme.baseline, 2, '/')};
  background: ${props => props.theme.palette.offWhite};
`;
