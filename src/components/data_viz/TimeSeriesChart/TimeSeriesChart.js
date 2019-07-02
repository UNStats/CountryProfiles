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
  StyledCrosshairValue,
  StyledChartHeader
} from './TimeSeriesChart-styled';

import SeriesLinks from '../../SeriesLinks';

import AutoSizer from 'react-virtualized-auto-sizer';

import {
  XYPlot,
  XAxis,
  YAxis,
  LineMarkSeries,
  Crosshair,
  HorizontalGridLines
} from 'react-vis';
import 'react-vis/dist/style.css';

class TimeSeriesChart extends Component {
  state = {
    crossHairValue: null,
    sortedData: null,
    dataIsUniform: false
  };

  componentDidMount() {
    const { sortedData, dataIsUniform, dataRange } = this.getData(
      this.props.series
    );

    this.setState({
      sortedData,
      dataIsUniform,
      dataRange
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.countryCode === this.props.countryCode) {
      return;
    }

    const { sortedData, dataIsUniform, dataRange } = this.getData(
      this.props.series
    );

    this.setState({
      sortedData,
      dataIsUniform,
      dataRange
    });
  }

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
    const dataUniqueValues = {};
    const dataRange = {
      min: null,
      max: null
    };

    const joinData = data_years.map((year, index) => {
      dataUniqueValues[data_numeric_part[index].toString()] = true;

      // Get data range to see if we need a 0 axis
      if (!dataRange.min || data_numeric_part[index] < dataRange.min) {
        dataRange.min = data_numeric_part[index];
      }
      if (!dataRange.max || data_numeric_part[index] > dataRange.max) {
        dataRange.max = data_numeric_part[index];
      }

      return {
        x: new Date(`1/1/${year}`),
        y: data_numeric_part[index],
        t: data_values[index]
      };
    });
    const sortedData = joinData.sort(this.sortByDate);

    const dataIsUniform = Object.keys(dataUniqueValues).length === 1;

    return { sortedData, dataIsUniform, dataRange };
  };

  getYDomain = (dataIsUniform, sortedData) => {
    // All data values are the same
    if (dataIsUniform) {
      const dataValue = sortedData[0].y;

      // The data value is between 0 and 100
      if (dataValue >= 0 && dataValue <= 100) {
        // Cap axis at 100 if the upper range is above 100
        return [dataValue * 0.5, dataValue * 1.5 > 100 ? 100 : dataValue * 1.5];
      }

      // Add lower and upper range to the data value so it shows up in the middle
      return [dataValue * 0.5, dataValue * 1.5];
    }

    // Otherwise let the chart do its thing
    return null;
  };

  getXTickTotal = sortedData => {
    return sortedData.length;
  };

  getZeroLine = dataRange => {
    if (dataRange.min < 0 && dataRange.max > 0) {
      return <HorizontalGridLines tickValues={[0]} />;
    }
  };

  getTimeSeriesChart = ({ series, goalInfo }) => {
    return (
      <AutoSizer>
        {({ width }) => (
          <XYPlot
            animation={{ duration: 5000 }}
            xType="time"
            yDomain={this.getYDomain(
              this.state.dataIsUniform,
              this.state.sortedData
            )}
            width={width - 10}
            height={200}
            yPadding={30}
            xPadding={20}
            onMouseLeave={() => this._onNearestX(null)}
          >
            {this.getZeroLine(this.state.dataRange)}
            <LineMarkSeries
              data={this.state.sortedData}
              curve={'curveMonotoneX'}
              color={goalInfo.colorInfo.hex}
              markStyle={{ fill: 'white', strokeWidth: 2 }}
              onNearestX={datapoint => this._onNearestX(datapoint)}
            />
            <XAxis tickTotal={this.getXTickTotal(this.state.sortedData)} />
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
            <StyledChartHeader>{series.seriesTitle}</StyledChartHeader>
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
