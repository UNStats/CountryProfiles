import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledNavContainer,
  StyledListItem,
  StyledNavLink,
  StyledGoalNum,
  StyledGoalTitle
} from './Nav-styled';

import ScrollToTop from './ScrollToTop';

import Scrollspy from 'react-scrollspy';

const Nav = ({ goals, goalInfos }) => {
  const getGoalSections = () => {
    return goals.map(goal => {
      return `goal-${goal.goalCode}`;
    });
  };

  const getGoalLinks = () => {
    return goals.map(goal => {
      const goalInfo = goalInfos.find(
        sdgInfo => sdgInfo.goal === Number(goal.goalCode)
      );

      return (
        <StyledListItem key={goal.goalCode}>
          <StyledNavLink href={`#goal-${goal.goalCode}`}>
            <StyledGoalNum goalColor={goalInfo.colorInfo.hex}>
              {goal.goalCode}
            </StyledGoalNum>
            <StyledGoalTitle>{goalInfo.short}</StyledGoalTitle>
          </StyledNavLink>
        </StyledListItem>
      );
    });
  };

  return (
    <StyledNavContainer>
      <Scrollspy items={getGoalSections()} currentClassName="active">
        {getGoalLinks()}
      </Scrollspy>
      <ScrollToTop />
    </StyledNavContainer>
  );
};

Nav.propTypes = {
  goals: PropTypes.array.isRequired,
  goalInfos: PropTypes.array.isRequired
};

export default Nav;
