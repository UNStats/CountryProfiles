import React, { Component } from 'react';

import { StyledMetricsContainer, StyledTabTitle } from './CountryHeader-styled';

import Tabs, { TabNav, TabContents, TabSection } from 'calcite-react/Tabs';
import Select from 'calcite-react/Select';
import { MenuItem } from 'calcite-react/Menu';
import CountryTheme from './CountryTheme';

class CountryMetrics extends Component {
  state = { activeTabIndex: 0 };

  onTabChange = index => {
    this.setState({ activeTabIndex: index });
  };

  getNav = themes => {
    if (this.props.isMobile) {
      return (
        <Select
          fullWidth
          onChange={this.onTabChange}
          selectedValue={this.state.activeTabIndex}
        >
          {themes.map((theme, i) => (
            <MenuItem value={i} label={theme.themeTitle} key={theme.themeTitle}>
              {theme.themeTitle}
            </MenuItem>
          ))}
        </Select>
      );
    }

    return themes.map(theme => (
      <StyledTabTitle title={theme.themeTitle} key={theme.themeTitle}>
        {theme.themeTitle}
      </StyledTabTitle>
    ));
  };

  render() {
    if (!this.props.metrics) {
      return 'loading...';
    }

    const { themes } = this.props.metrics;

    return (
      <StyledMetricsContainer>
        <Tabs
          transparent
          onTabChange={this.onTabChange}
          activeTabIndex={this.state.activeTabIndex}
        >
          <TabNav>{this.getNav(themes)}</TabNav>
          <TabContents>
            {themes.map(theme => (
              <TabSection key={theme.themeTitle}>
                <CountryTheme theme={theme} />
              </TabSection>
            ))}
          </TabContents>
        </Tabs>
      </StyledMetricsContainer>
    );
  }
  // return (
  //   <StyledMetricsContainer>
  //     <StyledMetric>
  //       <GroupIcon size={16} />
  //       <StyledMetricValue>Population: {0}</StyledMetricValue>
  //     </StyledMetric>
  //     <StyledMetric>
  //       <OrganizationIcon size={16} />
  //       <StyledMetricValue>Capital: {0}</StyledMetricValue>
  //     </StyledMetric>
  //     <StyledMetric>
  //       <LayersIcon size={16} />
  //       <StyledMetricValue>Currency: {0}</StyledMetricValue>
  //     </StyledMetric>
  //   </StyledMetricsContainer>
  // );
}

export default CountryMetrics;
