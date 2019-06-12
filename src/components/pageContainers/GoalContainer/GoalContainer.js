import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledGoalContainer } from './GoalContainer-styled';

import Goal from '../../Goal';

import sdgsMoreInfo from '../../../json/sdgs-more-info.json';

class GoalContainer extends Component {
  render() {
    const goalInfo = sdgsMoreInfo.data.find(
      sdgInfo => sdgInfo.goal === Number(this.props.goal.goalCode)
    );

    return (
      <StyledGoalContainer>
        <Goal goal={this.props.goal} goalInfo={goalInfo} />
      </StyledGoalContainer>
    );
  }
}

GoalContainer.propTypes = {
  goal: PropTypes.object.isRequired
};

export default GoalContainer;
