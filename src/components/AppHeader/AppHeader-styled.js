import styled, { css } from 'styled-components';
import TopNav from 'calcite-react/TopNav/TopNav';

const StyledTopNav = styled(TopNav)`
  ${props =>
    props.isMobile &&
    css`
      position: sticky;
      top: 0;
    `};
`;

const SpacerDiv = styled.div`
  display: flex;

  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export { StyledTopNav, SpacerDiv };
