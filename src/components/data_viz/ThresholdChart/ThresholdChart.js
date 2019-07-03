import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledChart } from './ThresholdChart-styled';
import {
  StyledTimeSeries,
  StyledDescriptionContainer,
  StyledDescriptionText,
  StyledChartSection
  // StyledCrosshairTooltip,
  // StyledCrosshairLabel,
  // StyledCrosshairValue
} from '../TimeSeriesChart/TimeSeriesChart-styled';

import SeriesLinks from '../../SeriesLinks';

import AutoSizer from 'react-virtualized-auto-sizer';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalBarSeries,
  CustomSVGSeries,
  GradientDefs
} from 'react-vis';
import 'react-vis/dist/style.css';

class ThresholdChart extends Component {
  getSVGThingy(row, positionInPixels) {
    return (
      <g transform="translate(0,20)">
        <polygon
          points="-3,-5 -3,-47 3,-47 3,-5 13,10 -13,10"
          fill="rgb(180,185,190)"
          stroke="white"
          strokeWidth={3}
        />
      </g>
    );
  }

  getThresholdChart = ({ series, goalInfo }) => {
    let highVal = Number(series.threshold_value) * 1.1;
    let isNormalRange = true;
    if (series.data_numeric_part[0] > Number(series.threshold_value)) {
      highVal = series.data_numeric_part[0] * 1.1;
      isNormalRange = false;
    }

    return (
      <AutoSizer>
        {({ width }) => (
          <XYPlot
            animation={{ duration: 5000 }}
            width={width}
            height={125}
            stackBy="x"
          >
            <GradientDefs>
              <linearGradient id="greenGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgb(59,170,75)" />
                <stop offset="100%" stopColor="rgb(171,206,84)" />
              </linearGradient>
              <linearGradient id="redGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgb(231,126,94)" />
                <stop offset="100%" stopColor="rgb(228,83,70)" />
              </linearGradient>
            </GradientDefs>
            <XAxis
              orientation="top"
              hideLine
              top={20}
              style={{
                ticks: { stroke: 'transparent' },
                text: {
                  fill: isNormalRange ? 'rgb(59,170,75)' : 'rgb(228,83,70)'
                }
              }}
              tickValues={[series.data_numeric_part[0]]}
              tickFormat={i => series.data_numeric_part[0]}
            />
            <HorizontalBarSeries
              barWidth={0.5}
              color={'url(#greenGradient)'}
              data={[{ y: 1, x: Number(series.threshold_value) }]}
            />
            <HorizontalBarSeries
              barWidth={0.5}
              color={'url(#redGradient)'}
              data={[
                {
                  y: 1,
                  x: highVal - Number(series.threshold_value)
                }
              ]}
            />
            <CustomSVGSeries
              customComponent={this.getSVGThingy}
              data={[{ x: series.data_numeric_part[0], y: 1 }]}
            />
            <XAxis />
            <YAxis
              hideLine
              style={{
                ticks: { stroke: 'transparent' }
              }}
              left={8}
              tickValues={[1]}
              tickFormat={i => series.fact_years[0]}
            />
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
