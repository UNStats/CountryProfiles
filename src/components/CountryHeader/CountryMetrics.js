import React, { Component } from 'react';

import {
  StyledMetricsContainer,
  StyledAccordionContent
} from './CountryHeader-styled';

import Accordion, {
  AccordionSection,
  AccordionTitle
} from 'calcite-react/Accordion';
import CountryTheme from './CountryTheme';

class CountryMetrics extends Component {
  state = { activeSectionIndexes: [] };

  onAccordionChange = (e, index) => {
    if (this.state.activeSectionIndexes.includes(index)) {
      this.setState({ activeSectionIndexes: [] });
    } else {
      this.setState({ activeSectionIndexes: [index] });
    }
  };

  getAccordionSections = themes => {
    return themes.map(theme => (
      <AccordionSection key={theme.themeTitle}>
        <AccordionTitle>{theme.themeTitle}</AccordionTitle>
        <StyledAccordionContent>
          <CountryTheme theme={theme} />
        </StyledAccordionContent>
      </AccordionSection>
    ));
  };

  render() {
    if (!this.props.metrics) {
      return 'loading...';
    }

    const { themes } = this.props.metrics;

    return (
      <StyledMetricsContainer>
        <Accordion
          transparent
          onAccordionChange={this.onAccordionChange}
          activeSectionIndexes={this.state.activeSectionIndexes}
        >
          {this.getAccordionSections(themes)}
        </Accordion>
      </StyledMetricsContainer>
    );
  }
}

export default CountryMetrics;
