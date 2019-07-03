import React from 'react';

import { StyledIconContainer } from './GoalHeader-styled';

import { getGoalIcon } from '../../utils/svgHelper';

const GoalThumbnail = ({ goalCode, goalColor = '#000' }) => {
  const code = goalCode.length > 1 ? goalCode : `0${goalCode}`;

  const Icon = getGoalIcon(code.toString());

  return (
    <StyledIconContainer iconColor={goalColor}>
      <Icon />
    </StyledIconContainer>
  );
};

export default GoalThumbnail;
