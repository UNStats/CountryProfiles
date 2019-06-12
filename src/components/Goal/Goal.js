import React from 'react';
import PropTypes from 'prop-types';

import { StyledGoal } from './Goal-styled';

import GoalHeader from '../GoalHeader';
import Series from '../Series';

const Goal = ({ goal, goalInfo }) => {
  const getGoalHeader = () => {
    const params = new URLSearchParams(window.location.search);
    const hideGoalHeader = params.get('hideGoalHeader');

    if (!hideGoalHeader) {
      return <GoalHeader goal={goal} goalInfo={goalInfo} />;
    }

    return null;
  };

  const getFacts = () => {
    return goal.targets.map(target => {
      return target.indicators.map(indicator => {
        return indicator.facts.map(series => {
          const params = new URLSearchParams(window.location.search);
          const seriesParam = params.get('series');

          if (!seriesParam || seriesParam.indexOf(series.seriesCode) > -1) {
            return (
              <Series
                key={series.seriesCode}
                series={series}
                goalInfo={goalInfo}
              />
            );
          }

          return null;
        });
      });
    });
  };

  return (
    <StyledGoal>
      {getGoalHeader()}
      {getFacts()}
    </StyledGoal>
  );
};

Goal.propTypes = {
  goal: PropTypes.object.isRequired
};

export default Goal;
