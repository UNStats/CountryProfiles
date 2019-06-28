import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledTimeSeries,
  StyledDescriptionContainer,
  StyledDescriptionText,
  StyledChartSection,
  StyledChart
  // StyledCrosshairTooltip,
  // StyledCrosshairLabel,
  // StyledCrosshairValue
} from '../TimeSeriesChart/TimeSeriesChart-styled';

import SeriesLinks from '../../SeriesLinks';

import AutoSizer from 'react-virtualized-auto-sizer';

import {
  XYPlot,
  XAxis,
  // YAxis,
  HorizontalBarSeries,
  CustomSVGSeries
} from 'react-vis';
import 'react-vis/dist/style.css';

class ThresholdChart extends Component {
  getSVGThingy(row, positionInPixels) {
    return (
      <g transform="translate(0,20)">
        <polygon
          points="7,0 7,-500 13,-500 13,0 27,22 -7,22"
          fill="rgb(100,100,100)"
          stroke="white"
          strokeWidth={3}
        />
      </g>
    );
  }

  getThresholdChart = ({ series, goalInfo }) => {
    return (
      <AutoSizer>
        {({ width }) => (
          <XYPlot
            animation={{ duration: 5000 }}
            width={width}
            height={100}
            yPadding={50}
            stackBy="x"
          >
            <HorizontalBarSeries
              color="green"
              data={[{ y: 2, x: Number(series.threshold) }]}
            />
            <HorizontalBarSeries
              color="red"
              data={[
                {
                  y: 2,
                  x: Number(series.threshold) * 0.1
                }
              ]}
            />
            <CustomSVGSeries
              customComponent={this.getSVGThingy}
              data={[{ x: 5, y: 1 }]}
            />
            <XAxis />
          </XYPlot>
        )}
      </AutoSizer>
    );
  };

  render() {
    const { series, goalInfo } = this.props;

    return (
      <StyledTimeSeries>
        <StyledDescriptionContainer>
          <StyledDescriptionText
            dangerouslySetInnerHTML={{ __html: series.fact_text }}
          />
        </StyledDescriptionContainer>
        <StyledChartSection>
          <StyledChart>
            {this.getThresholdChart({ series, goalInfo })}
          </StyledChart>
          <SeriesLinks goalInfo={goalInfo} />
        </StyledChartSection>
      </StyledTimeSeries>
    );
  }
}

ThresholdChart.propTypes = {
  series: PropTypes.object.isRequired,
  goalInfo: PropTypes.object.isRequired
};

export default ThresholdChart;
