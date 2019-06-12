import React from 'react';
import PropTypes from 'prop-types';

import { StyledLinksContainer, StyledLinkButton } from './SeriesLinks-styled';

import Tooltip from 'calcite-react/Tooltip';
import DashboardIcon from 'calcite-ui-icons-react/DashboardIcon';
import DownloadIcon from 'calcite-ui-icons-react/DownloadIcon';
import WebIcon from 'calcite-ui-icons-react/WebIcon';

const SeriesLinks = ({ goalInfo }) => {
  return (
    <StyledLinksContainer>
      <Tooltip placement="left" title="View Dashboard">
        <StyledLinkButton iconButton icon={<DashboardIcon />} />
      </Tooltip>
      <Tooltip placement="left" title="Download Dataset as CSV">
        <StyledLinkButton iconButton icon={<DownloadIcon />} />
      </Tooltip>
      <Tooltip placement="left" title="View Dataset">
        <StyledLinkButton iconButton icon={<WebIcon />} />
      </Tooltip>
    </StyledLinksContainer>
  );
};

SeriesLinks.propTypes = {
  goalInfo: PropTypes.object.isRequired
};

export default SeriesLinks;
