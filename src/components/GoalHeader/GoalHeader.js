import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledGoalHeader,
  StyledIconContainer,
  StyledContentContainer,
  StyledHeaderText,
  StyledSubheader
} from './GoalHeader-styled';

const GoalHeader = ({ goal, goalInfo }) => {
  return (
    <StyledGoalHeader noBorder noPadding white>
      <StyledIconContainer>
        <img
          src={`https://s3.amazonaws.com/un-country-profiles-2019/SDG_ICONS_2019/E_SDG+goals_icons-individual-rgb-${
            goal.goalCode
          }.png`}
          alt="goal icon"
        />
      </StyledIconContainer>
      <StyledContentContainer>
        <StyledHeaderText>{goalInfo.short}</StyledHeaderText>
        <StyledSubheader>{goalInfo.title}</StyledSubheader>
      </StyledContentContainer>
    </StyledGoalHeader>
  );
};

GoalHeader.propTypes = {
  goal: PropTypes.object.isRequired
};

export default GoalHeader;
