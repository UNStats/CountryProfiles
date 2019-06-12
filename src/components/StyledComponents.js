import styled from 'styled-components';

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
`;

const StyledSectionContainer = styled.div`
  width: calc(100% - 400px);
  max-width: 1000px;
  margin: 0 2rem;
`;

const StyledSection = styled.div`
  padding: 2rem 0 4rem;
  margin-top: 1px;
`;

export {
  StyledModalHeader,
  StyledContentContainer,
  StyledSectionContainer,
  StyledSection
};
