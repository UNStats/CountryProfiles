import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledCountryHeader,
  StyledDetailsCard,
  SpacerDiv
} from './CountryHeader-styled';
import CountryMetrics from './CountryMetrics';
// import CountryMap from './CountryMap';

const CountryHeader = ({ name, code, metricsJson, isMobile }) => {
  return (
    <StyledCountryHeader>
      <SpacerDiv>
        <StyledDetailsCard>
          <CountryMetrics metrics={metricsJson} isMobile={isMobile} />
        </StyledDetailsCard>
        {/* <CountryMap code={code} /> */}
      </SpacerDiv>
    </StyledCountryHeader>
  );
};

CountryHeader.propTypes = {
  name: PropTypes.string
};

export default CountryHeader;
