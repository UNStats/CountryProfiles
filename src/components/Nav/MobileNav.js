import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledGoalNum,
  StyledGoalTitle,
  StyledSideNavLink
} from './Nav-styled';

import Drawer from 'calcite-react/Drawer';
import SideNav, { SideNavLink, SideNavTitle } from 'calcite-react/SideNav';
import Button from 'calcite-react/Button';
import SearchIcon from 'calcite-ui-icons-react/SearchIcon';

const Nav = ({
  onRequestClose,
  active,
  goals,
  goalInfos,
  showCountrySelector
}) => {
  const getGoalLinks = () => {
    return goals.map(goal => {
      const goalInfo = goalInfos.find(
        sdgInfo => sdgInfo.goal === Number(goal.goalCode)
      );

      return (
        <StyledSideNavLink
          key={goal.goalCode}
          href={`#goal-${goal.goalCode}`}
          onClick={onRequestClose}
        >
          <StyledGoalNum goalColor={goalInfo.colorInfo.hex}>
            {goal.goalCode}
          </StyledGoalNum>
          <StyledGoalTitle>{goalInfo.short}</StyledGoalTitle>
        </StyledSideNavLink>
      );
    });
  };

  const getCountrySelector = () => {
    if (showCountrySelector) {
      return (
        <SideNavLink>
          <Button
            fullWidth
            icon={<SearchIcon size={16} />}
            iconPosition="before"
            onClick={showCountrySelector}
          >
            Select a Country
          </Button>
        </SideNavLink>
      );
    }
  };

  return (
    <Drawer active={active} onRequestClose={onRequestClose}>
      <SideNav>
        {getCountrySelector()}
        <SideNavTitle>Goals</SideNavTitle>
        <nav>{getGoalLinks()}</nav>
      </SideNav>
    </Drawer>
  );
};

Nav.propTypes = {
  goals: PropTypes.array.isRequired,
  goalInfos: PropTypes.array.isRequired
};

export default Nav;
