import styled, { css } from 'styled-components';

import { unitCalc } from 'calcite-react/utils/helpers';

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
  padding: ${props => unitCalc(props.theme.baseline, 4, '*')} 0
    ${props => unitCalc(props.theme.baseline, 3, '/')};
  margin-top: 1px;

  &:first-child {
    margin-top: ${props => unitCalc(props.theme.baseline, -3, '*')};
  }

  &:last-child {
    margin-bottom: ${props => props.theme.baseline};
  }
`;

export {
  StyledModalHeader,
  StyledContentContainer,
  StyledSectionContainer,
  StyledSection
};
