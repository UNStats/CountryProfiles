import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledCountryHeader,
  StyledDetailsCard,
  StyledCountryTitle,
  SpacerDiv
} from './CountryHeader-styled';
import CountryMetrics from './CountryMetrics';
import CountryMap from './CountryMap';

const CountryHeader = ({ name, image, metricsJson }) => {
  return (
    <StyledCountryHeader>
      <SpacerDiv>
        <StyledDetailsCard>
          <StyledCountryTitle>{name}</StyledCountryTitle>
          <CountryMetrics metrics={metricsJson} />
        </StyledDetailsCard>
        <CountryMap />
      </SpacerDiv>
    </StyledCountryHeader>
  );
};

CountryHeader.propTypes = {
  name: PropTypes.string
};

export default CountryHeader;
