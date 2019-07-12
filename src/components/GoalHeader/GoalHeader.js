import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledGoalHeader,
  StyledHeaderContent,
  StyledTextContainer,
  StyledHeaderText,
  StyledSubheader,
  StyledActionButton
} from './GoalHeader-styled';

import EmbedHelper from '../EmbedHelper';

import Tooltip from 'calcite-react/Tooltip';
import CodeIcon from 'calcite-ui-icons-react/CodeIcon';
import GoalThumbnail from './GoalThumbnail';

class GoalHeader extends Component {
  state = {
    showEmbedHelper: false
  };

  getEmbedBtn = (showEmbedBtn, isMobile) => {
    if (showEmbedBtn && !isMobile) {
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
    const { goal, goalInfo, isMobile } = this.props;
    const params = new URLSearchParams(window.location.search);
    const showEmbedBtn = !params.get('goal');

    return (
      <StyledGoalHeader noBorder noPadding white>
        <StyledHeaderContent>
          <GoalThumbnail
            goalCode={goal.goalCode}
            goalColor={goalInfo.colorInfo.hex}
          />
          <StyledTextContainer>
            <StyledHeaderText>{goalInfo.short}</StyledHeaderText>
            <StyledSubheader>{goalInfo.title}</StyledSubheader>
          </StyledTextContainer>
        </StyledHeaderContent>
        {this.getEmbedBtn(showEmbedBtn, isMobile)}
        {this.getEmbedHelper()}
      </StyledGoalHeader>
    );
  }
}

GoalHeader.propTypes = {
  goal: PropTypes.object.isRequired
};

export default GoalHeader;
