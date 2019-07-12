import styled from 'styled-components';
import TopNav, { TopNavTitle } from 'calcite-react/TopNav';

import { unitCalc } from 'calcite-react/utils/helpers';

const StyledTopNav = styled(TopNav)`
  position: sticky;
  top: 0;
`;

const SpacerDiv = styled.div`
  display: flex;

  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const TopNavSubTitle = styled(TopNavTitle)`
  height: ${props => props.theme.baseline};
  padding: ${props => unitCalc(props.theme.baseline, 3, '/')} 0
    ${props => unitCalc(props.theme.baseline, 3, '/')}
    ${props => props.theme.baseline};
  align-self: center;
  border-left: 1px solid ${props => props.theme.palette.gray};
  color: ${props => props.theme.palette.blue};

  &:hover {
    cursor: auto;
    color: ${props => props.theme.palette.blue};
  }
`;

export { StyledTopNav, SpacerDiv, TopNavSubTitle };
