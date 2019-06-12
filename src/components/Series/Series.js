import React from 'react';
import PropTypes from 'prop-types';

import { StyledSeriesContainer } from './Series-styled';

import MetricIndicator from '../data_viz/MetricIndicator';
import TimeSeriesChart from '../data_viz/TimeSeriesChart';
import YesNoIndicator from '../data_viz/YesNoIndicator';

const Series = ({ series, goalInfo }) => {
  const getContent = () => {
    switch (series.preferred_visualization) {
      case 'singleton':
        return <MetricIndicator series={series} goalInfo={goalInfo} />;

      case 'time_series':
        return <TimeSeriesChart series={series} goalInfo={goalInfo} />;

      case 'boolean':
        return <YesNoIndicator series={series} goalInfo={goalInfo} />;
      default:
        break;
    }
  };

  return (
    <StyledSeriesContainer noPadding white>
      {getContent()}
    </StyledSeriesContainer>
  );
};

Series.propTypes = {
  series: PropTypes.object.isRequired
};

export default Series;
