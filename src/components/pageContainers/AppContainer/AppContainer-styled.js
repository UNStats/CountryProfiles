import styled, { css } from 'styled-components';
import Loader from 'calcite-react/Loader';

const CenteredLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

const StyledAppContainer = styled.div`
  transition: opacity 250ms linear;

  ${props =>
    props.isLoading &&
    css`
      opacity: 0.5;
    `};
`;

const dialogStyle = {
  width: '460px',
  height: '80vh',
  maxHeight: '600px'
};

export { StyledAppContainer, CenteredLoader, dialogStyle };
