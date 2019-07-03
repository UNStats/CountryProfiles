import React, { Component } from 'react';

import { StyledMetricsContainer } from './CountryHeader-styled';

import Tabs, {
  TabNav,
  TabTitle,
  TabContents,
  TabSection
} from 'calcite-react/Tabs';
import CountryTheme from './CountryTheme';

class CountryMetrics extends Component {
  state = { activeTabIndex: 0 };

  onTabChange = index => {
    this.setState({ activeTabIndex: index });
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
          <TabNav>
            {themes.map(theme => (
              <TabTitle style={{ flex: '1' }} key={theme.themeTitle}>
                {theme.themeTitle}
              </TabTitle>
            ))}
          </TabNav>
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
