import styled from 'styled-components';
import { unitCalc } from 'calcite-react/utils/helpers';
import Breadcrumbs from 'calcite-react/Breadcrumbs';

const StyledBreadcrumbsWrapper = styled.div`
  box-sizing: border-box;
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')}
    ${props => props.theme.baseline};
  background: ${props => props.theme.palette.offWhite};
`;

const StyledBreadcrumbs = styled(Breadcrumbs)`
  max-width: 1350px;
  margin: 0 auto;
`;

export { StyledBreadcrumbsWrapper, StyledBreadcrumbs };
