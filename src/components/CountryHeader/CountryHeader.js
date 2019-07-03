import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledCountryHeader,
  StyledImageCard,
  StyledDetailsCard,
  StyledCountryTitle,
  SpacerDiv
} from './CountryHeader-styled';
import CountryMetrics from './CountryMetrics';

const CountryHeader = ({ name, image, metricsJson }) => {
  return (
    <StyledCountryHeader>
      <SpacerDiv>
        <StyledDetailsCard>
          <StyledCountryTitle>{name}</StyledCountryTitle>
          <CountryMetrics metrics={metricsJson} />
        </StyledDetailsCard>
        <StyledImageCard image={image} />
      </SpacerDiv>
    </StyledCountryHeader>
  );
};

CountryHeader.propTypes = {
  name: PropTypes.string
};

export default CountryHeader;
