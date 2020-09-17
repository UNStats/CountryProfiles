import React from 'react';
import PropTypes from 'prop-types';

import { StyledLinksContainer, StyledLinkButton } from './SeriesLinks-styled';

import Tooltip from 'calcite-react/Tooltip';
import DashboardIcon from 'calcite-ui-icons-react/DashboardIcon';
import DownloadIcon from 'calcite-ui-icons-react/DownloadIcon';
import WebIcon from 'calcite-ui-icons-react/WebIcon';

const SeriesLinks = ({ hub, dashboard, isMobile }) => {
  if (isMobile) {
    return null;
  }

  return (
    <StyledLinksContainer>
      {/* <Tooltip placement="left" title="View Dashboard">
        <StyledLinkButton
          iconButton
          icon={<DashboardIcon />}
          href={`http://undesa.maps.arcgis.com/apps/opsdashboard/index.html#/${dashboard}`}
          target="_blank"
        />
      </Tooltip> */}
      <Tooltip placement="left" title="Download Dataset as CSV">
        <StyledLinkButton
          iconButton
          icon={<DownloadIcon />}
          href={`http://www.sdg.org/datasets/${hub}_0.csv`}
          target="_blank"
        />
      </Tooltip>
      <Tooltip placement="left" title="View Dataset">
        <StyledLinkButton
          iconButton
          icon={<WebIcon />}
          href={`http://www.sdg.org/datasets/${hub}`}
          target="_blank"
        />
      </Tooltip>
    </StyledLinksContainer>
  );
};

SeriesLinks.propTypes = {
  hub: PropTypes.string.isRequired,
  dashboard: PropTypes.string.isRequired
};

export default SeriesLinks;
