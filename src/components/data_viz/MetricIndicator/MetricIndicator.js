import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledMetricContainer,
  StyledMetricContent,
  StyledMetricValue,
  StyledMetricUnit,
  StyledMetricSeries,
  StyledMetricDescription,
  StyledDescriptionText
} from './MetricIndicator-styled';

import SeriesLinks from '../../SeriesLinks';

const MetricIndicator = ({ series, goalInfo, isMobile }) => {
  const getMetricValue = () => {
    // Trim value to 2 decimals and trim trailing zeros
    return parseFloat(
      Number(
        series.data_numeric_part[series.data_numeric_part.length - 1]
      ).toFixed(2)
    );
  };

  const unitLength = series.fact_units[0] ? series.fact_units[0].length : 0;

  return (
    <StyledMetricSeries>
      <StyledMetricContent>
        <StyledMetricContainer color={goalInfo.colorInfo.hex}>
          <StyledMetricValue>{getMetricValue()}</StyledMetricValue>
          <StyledMetricUnit unitLength={unitLength}>
            {series.fact_units[0]}
          </StyledMetricUnit>
        </StyledMetricContainer>
        <StyledMetricDescription>
          <StyledDescriptionText
            dangerouslySetInnerHTML={{ __html: series.fact_text }}
          />
        </StyledMetricDescription>
      </StyledMetricContent>
      <SeriesLinks
        hub={series.hub}
        dashboard={series.dashboard}
        isMobile={isMobile}
      />
    </StyledMetricSeries>
  );
};

MetricIndicator.propTypes = {
  series: PropTypes.object.isRequired,
  goalInfo: PropTypes.object.isRequired
};

export default MetricIndicator;
