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

const MetricIndicator = ({ series, goalInfo }) => {
  const getMetricValue = () => {
    // Trim value to 2 decimals and trim trailing zeros
    return parseFloat(Number(series.fact_values[0]).toFixed(2));
  };

  return (
    <StyledMetricSeries>
      <StyledMetricContent>
        <StyledMetricContainer color={goalInfo.colorInfo.hex}>
          <StyledMetricValue>{getMetricValue()}</StyledMetricValue>
          <StyledMetricUnit unitLength={series.fact_units[0].length}>
            {series.fact_units[0]}
          </StyledMetricUnit>
        </StyledMetricContainer>
        <StyledMetricDescription>
          <StyledDescriptionText
            dangerouslySetInnerHTML={{ __html: series.fact_text }}
          />
        </StyledMetricDescription>
      </StyledMetricContent>
      <SeriesLinks goalInfo={goalInfo} />
    </StyledMetricSeries>
  );
};

MetricIndicator.propTypes = {
  series: PropTypes.object.isRequired,
  goalInfo: PropTypes.object.isRequired
};

export default MetricIndicator;
