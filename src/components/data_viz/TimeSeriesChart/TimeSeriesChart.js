import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledTimeSeries,
  StyledDescriptionContainer,
  StyledDescriptionText,
  StyledChartSection,
  StyledChart,
  StyledCrosshairTooltip,
  StyledCrosshairLabel,
  StyledCrosshairValue
} from './TimeSeriesChart-styled';

import SeriesLinks from '../../SeriesLinks';

import AutoSizer from 'react-virtualized-auto-sizer';

import { XYPlot, XAxis, YAxis, LineMarkSeries, Crosshair } from 'react-vis';
import 'react-vis/dist/style.css';

class TimeSeriesChart extends Component {
  state = {
    crossHairValue: null
  };

  sortByDate = (a, b) => {
    if (a.x < b.x) {
      return -1;
    }
    if (a.x > b.x) {
      return 1;
    }

    return 0;
  };

  getData = series => {
    const { data_years, data_numeric_part, data_values } = series;

    const joinData = data_years.map((year, index) => {
      return {
        x: new Date(`1/1/${year}`),
        y: data_numeric_part[index],
        t: data_values[index]
      };
    });

    return joinData.sort(this.sortByDate);
  };

  getTimeSeriesChart = ({ series, goalInfo }) => {
    return (
      <AutoSizer>
        {({ width }) => (
          <XYPlot
            animation={{ duration: 5000 }}
            xType="time"
            width={width}
            height={200}
            yPadding={20}
            onMouseLeave={() => this._onNearestX(null)}
          >
            <LineMarkSeries
              data={this.getData(series)}
              curve={'curveMonotoneX'}
              color={goalInfo.colorInfo.hex}
              markStyle={{ fill: 'white', strokeWidth: 2 }}
              onNearestX={datapoint => this._onNearestX(datapoint)}
            />
            <XAxis />
            <YAxis />
            {this.state.crossHairValue ? (
              <Crosshair values={[this.state.crossHairValue]}>
                <StyledCrosshairTooltip>
                  <StyledCrosshairLabel>
                    {this.state.crossHairValue.x.toLocaleString('en-us', {
                      year: 'numeric'
                    })}
                    :
                  </StyledCrosshairLabel>
                  <StyledCrosshairValue>
                    {this.state.crossHairValue.t}
                    {series.fact_units[0]}
                  </StyledCrosshairValue>
                </StyledCrosshairTooltip>
              </Crosshair>
            ) : null}
          </XYPlot>
        )}
      </AutoSizer>
    );
  };

  _onNearestX = datapoint => {
    this.setState({
      crossHairValue: datapoint
    });
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
            {this.getTimeSeriesChart({ series, goalInfo })}
          </StyledChart>
          <SeriesLinks goalInfo={goalInfo} />
        </StyledChartSection>
      </StyledTimeSeries>
    );
  }
}

TimeSeriesChart.propTypes = {
  series: PropTypes.object.isRequired,
  goalInfo: PropTypes.object.isRequired
};

export default TimeSeriesChart;
