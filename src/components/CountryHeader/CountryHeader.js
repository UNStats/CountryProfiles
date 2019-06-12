import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledCountryHeader,
  StyledImageCard,
  StyledDetailsCard,
  StyledCountryTitle,
  StyledMetricsContainer,
  StyledMetric,
  StyledMetricValue
} from './CountryHeader-styled';

import GroupIcon from 'calcite-ui-icons-react/GroupIcon';
import OrganizationIcon from 'calcite-ui-icons-react/OrganizationIcon';
import LayersIcon from 'calcite-ui-icons-react/LayersIcon';

const CountryHeader = ({ name, population, capital, currency, image }) => {
  return (
    <StyledCountryHeader>
      <StyledDetailsCard>
        <StyledCountryTitle>{name}</StyledCountryTitle>
        <StyledMetricsContainer>
          <StyledMetric>
            <GroupIcon size={16} />
            <StyledMetricValue>Population: {population}</StyledMetricValue>
          </StyledMetric>
          <StyledMetric>
            <OrganizationIcon size={16} />
            <StyledMetricValue>Capital: {capital}</StyledMetricValue>
          </StyledMetric>
          <StyledMetric>
            <LayersIcon size={16} />
            <StyledMetricValue>Currency: {currency}</StyledMetricValue>
          </StyledMetric>
        </StyledMetricsContainer>
      </StyledDetailsCard>
      <StyledImageCard image={image} />
    </StyledCountryHeader>
  );
};

CountryHeader.propTypes = {
  name: PropTypes.string
};

export default CountryHeader;
