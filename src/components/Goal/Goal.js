import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledGoal, StyledIndicatorContainer } from './Goal-styled';

import GoalHeader from '../GoalHeader';
import Series from '../Series';
import EmbedHelper from '../EmbedHelper';
import Button from 'calcite-react/Button/Button';

class Goal extends Component {
  state = {
    showEmbedHelper: false
  };

  getGoalHeader = () => {
    const params = new URLSearchParams(window.location.search);
    const hideGoalHeader = params.get('hideGoalHeader');

    if (!hideGoalHeader) {
      return (
        <GoalHeader goal={this.props.goal} goalInfo={this.props.goalInfo} />
      );
    }

    return null;
  };

  getFacts = () => {
    return this.props.goal.targets.map(target => {
      return target.indicators.map(indicator => {
        return indicator.facts.map(series => {
          const params = new URLSearchParams(window.location.search);
          const seriesParam = params.get('series');

          if (!seriesParam || seriesParam.indexOf(series.seriesCode) > -1) {
            return (
              <Series
                key={series.seriesCode}
                series={series}
                goalInfo={this.props.goalInfo}
                countryCode={this.props.countryCode}
              />
            );
          }

          return null;
        });
      });
    });
  };

  getEmbedHelper = () => {
    if (this.state.showEmbedHelper) {
      return (
        <EmbedHelper
          goal={this.props.goal}
          goalInfo={this.props.goalInfo}
          countryCode={this.props.countryCode}
          onClose={this.hideEmbedHelper}
        />
      );
    }
  };

  showEmbedHelper = () => {
    this.setState({ showEmbedHelper: true });
  };

  hideEmbedHelper = () => {
    this.setState({ showEmbedHelper: false });
  };

  render() {
    return (
      <StyledGoal>
        {this.getGoalHeader()}
        <Button onClick={this.showEmbedHelper}>Embed</Button>
        <StyledIndicatorContainer>{this.getFacts()}</StyledIndicatorContainer>
        {this.getEmbedHelper()}
      </StyledGoal>
    );
  }
}

Goal.propTypes = {
  goal: PropTypes.object.isRequired
};

export default Goal;
