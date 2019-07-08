import styled, { css } from 'styled-components';

const StyledModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 1400px;
  margin: 0 auto;

  ${props =>
    props.isMobile &&
    css`
      flex-direction: column;
    `};
`;

const StyledSectionContainer = styled.div`
  width: calc(100% - 400px);
  max-width: 1000px;
  padding: 0 0.5rem;

  ${props =>
    props.isMobile &&
    css`
      width: 100%;
      box-sizing: border-box;
    `};
`;

const StyledSection = styled.div`
  padding: 2rem 0 4rem;
  margin-top: 1px;

  ${props =>
    props.isMobile &&
    css`
      padding: 5rem 0 1rem;

      &:first-child {
        margin-top: -3rem;
      }
    `};
`;

export {
  StyledModalHeader,
  StyledContentContainer,
  StyledSectionContainer,
  StyledSection
};
