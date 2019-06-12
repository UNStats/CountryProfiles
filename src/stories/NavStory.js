// Framework and third-party non-ui
import React from 'react';
import styled from 'styled-components';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)

// App components
import Nav from '../components/Nav';

// Third-party components (buttons, icons, etc.)

// JSON

// CSS
const StyledContentContainer = styled.div`
  position: relative;
  transform: initial;
`;
const StyledSectionContainer = styled.div`
  width: calc(100% - 400px);
  max-width: 1000px;
  margin: 0 auto;
`;
const StyledSection = styled.div`
  height: 100vh;
  padding: 2rem 0;
`;

const NavStory = props => {
  return (
    <StyledContentContainer>
      <Nav
        selectedCountry="Italy"
        goals={[
          { id: 1, title: 'Goal 1' },
          { id: 2, title: 'Goal 2' },
          { id: 3, title: 'Goal 3' },
          { id: 4, title: 'Goal 4' }
        ]}
      />
      <StyledSectionContainer>
        <StyledSection id="goal-1-section">Goal 1 Section</StyledSection>
        <StyledSection id="goal-2-section">Goal 2 Section</StyledSection>
        <StyledSection id="goal-3-section">Goal 3 Section</StyledSection>
        <StyledSection id="goal-4-section">Goal 4 Section</StyledSection>
      </StyledSectionContainer>
    </StyledContentContainer>
  );
};

NavStory.propTypes = {};

NavStory.defaultProps = {};

export default NavStory;
