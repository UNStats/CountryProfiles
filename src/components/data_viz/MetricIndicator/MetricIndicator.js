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
  return (
    <StyledMetricSeries>
      <StyledMetricContent>
        <StyledMetricContainer color={goalInfo.colorInfo.hex}>
          <StyledMetricValue>{series.data_numeric_part[0]}</StyledMetricValue>
          <StyledMetricUnit>{series.fact_units[0]}</StyledMetricUnit>
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
