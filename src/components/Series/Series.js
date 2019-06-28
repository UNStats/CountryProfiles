import React from 'react';
import PropTypes from 'prop-types';

import { StyledSeriesContainer } from './Series-styled';

import MetricIndicator from '../data_viz/MetricIndicator';
import TimeSeriesChart from '../data_viz/TimeSeriesChart';
import YesNoIndicator from '../data_viz/YesNoIndicator';

const Series = ({ series, goalInfo, countryCode }) => {
  const getContent = () => {
    switch (series.preferred_visualization) {
      case 'singleton':
        return <MetricIndicator series={series} goalInfo={goalInfo} />;

      case 'time_series':
        return (
          <TimeSeriesChart
            series={series}
            goalInfo={goalInfo}
            countryCode={countryCode}
          />
        );

      case 'boolean':
        return <YesNoIndicator series={series} goalInfo={goalInfo} />;

      case 'threshold':
        return 'The threshold series type is still under development.';

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
