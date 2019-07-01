import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledGoalHeader,
  StyledHeaderContent,
  StyledIconContainer,
  StyledTextContainer,
  StyledHeaderText,
  StyledSubheader,
  StyledActionButton
} from './GoalHeader-styled';

import EmbedHelper from '../EmbedHelper';

import Tooltip from 'calcite-react/Tooltip';
import CodeIcon from 'calcite-ui-icons-react/CodeIcon';

class GoalHeader extends Component {
  state = {
    showEmbedHelper: false
  };

  getEmbedBtn = showEmbedBtn => {
    if (showEmbedBtn) {
      return (
        <Tooltip title="Embed" placement="left">
          <StyledActionButton
            iconButton
            icon={<CodeIcon />}
            onClick={this.showEmbedHelper}
          />
        </Tooltip>
      );
    }
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
    const { goal, goalInfo } = this.props;
    const params = new URLSearchParams(window.location.search);
    const showEmbedBtn = !params.get('goal');

    return (
      <StyledGoalHeader noBorder noPadding white>
        <StyledHeaderContent>
          <StyledIconContainer>
            <img
              src={`https://s3.amazonaws.com/un-country-profiles-2019/SDG_ICONS_2019/E_SDG+goals_icons-individual-rgb-${
                goal.goalCode
              }.png`}
              alt="goal icon"
            />
          </StyledIconContainer>
          <StyledTextContainer>
            <StyledHeaderText>{goalInfo.short}</StyledHeaderText>
            <StyledSubheader>{goalInfo.title}</StyledSubheader>
          </StyledTextContainer>
        </StyledHeaderContent>
        {this.getEmbedBtn(showEmbedBtn)}
        {this.getEmbedHelper()}
      </StyledGoalHeader>
    );
  }
}

GoalHeader.propTypes = {
  goal: PropTypes.object.isRequired
};

export default GoalHeader;
