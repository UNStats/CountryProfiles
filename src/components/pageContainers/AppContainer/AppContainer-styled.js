import styled, { css } from 'styled-components';

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

export { StyledAppContainer, dialogStyle };
