import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledBoolContainer,
  StyledBoolContent,
  StyledBoolValue,
  StyledBoolSeries,
  StyledBoolDescription,
  StyledDescriptionText
} from './YesNoIndicator-styled';

import SeriesLinks from '../../SeriesLinks';

import CheckIcon from 'calcite-ui-icons-react/CheckIcon';
import XIcon from 'calcite-ui-icons-react/XIcon';

const YesNoIndicator = ({ series, goalInfo }) => {
  const getBoolIcon = () => {
    if (series.fact_values[0] === '1') {
      return <CheckIcon size={120} />;
    }

    return <XIcon size={120} />;
  };

  return (
    <StyledBoolSeries>
      <StyledBoolContent>
        <StyledBoolContainer color={goalInfo.colorInfo.hex}>
          <StyledBoolValue>{getBoolIcon()}</StyledBoolValue>
        </StyledBoolContainer>
        <StyledBoolDescription>
          <StyledDescriptionText
            dangerouslySetInnerHTML={{ __html: series.fact_text }}
          />
        </StyledBoolDescription>
      </StyledBoolContent>
      <SeriesLinks goalInfo={goalInfo} />
    </StyledBoolSeries>
  );
};

YesNoIndicator.propTypes = {
  series: PropTypes.object.isRequired,
  goalInfo: PropTypes.object.isRequired
};

export default YesNoIndicator;
