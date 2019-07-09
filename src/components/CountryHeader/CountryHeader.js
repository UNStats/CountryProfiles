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

const CountryHeader = ({ name, code, metricsJson }) => {
  return (
    <StyledCountryHeader>
      <SpacerDiv>
        <StyledDetailsCard>
          <StyledCountryTitle>{name}</StyledCountryTitle>
          <CountryMetrics metrics={metricsJson} />
        </StyledDetailsCard>
        <CountryMap code={code} />
      </SpacerDiv>
    </StyledCountryHeader>
  );
};

CountryHeader.propTypes = {
  name: PropTypes.string
};

export default CountryHeader;
