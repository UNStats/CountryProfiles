import React from 'react';
import PropTypes from 'prop-types';

import { StyledSeriesContainer } from './Series-styled';

import MetricIndicator from '../data_viz/MetricIndicator';
import TimeSeriesChart from '../data_viz/TimeSeriesChart';
import ThresholdChart from '../data_viz/ThresholdChart';
import YesNoIndicator from '../data_viz/YesNoIndicator';

const Series = ({ series, goalInfo, countryCode, isMobile }) => {
  const getContent = () => {
    switch (series.preferred_visualization) {
      case 'singleton':
        return (
          <MetricIndicator
            series={series}
            goalInfo={goalInfo}
            isMobile={isMobile}
          />
        );

      case 'time_series':
        return (
          <TimeSeriesChart
            series={series}
            goalInfo={goalInfo}
            countryCode={countryCode}
            isMobile={isMobile}
          />
        );

      case 'boolean':
        return (
          <YesNoIndicator
            series={series}
            goalInfo={goalInfo}
            isMobile={isMobile}
          />
        );

      case 'threshold':
        return (
          <ThresholdChart
            series={series}
            goalInfo={goalInfo}
            countryCode={countryCode}
            isMobile={isMobile}
          />
        );

      default:
        break;
    }
  };

  return (
    <StyledSeriesContainer noBorder noPadding white>
      {getContent()}
    </StyledSeriesContainer>
  );
};

Series.propTypes = {
  series: PropTypes.object.isRequired
};

export default Series;
