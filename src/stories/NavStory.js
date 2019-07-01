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

const NavStory = ({ goals, goalInfos }) => {
  return (
    <StyledContentContainer>
      <Nav selectedCountry="Italy" goals={goals} goalInfos={goalInfos} />
    </StyledContentContainer>
  );
};

NavStory.propTypes = {};

NavStory.defaultProps = {};

export default NavStory;
