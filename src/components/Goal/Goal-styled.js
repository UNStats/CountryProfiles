import styled from 'styled-components';

const StyledGoal = styled.div`
  width: 100%;
  background: #fcfcfc;
  box-shadow: ${props => props.theme.boxShadow3};
`;

const StyledIndicatorContainer = styled.div`
  padding: 20px;
`;

export { StyledGoal, StyledIndicatorContainer };
