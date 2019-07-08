import React from 'react';
// import PropTypes from 'prop-types';

import {
  StyledBreadcrumbsWrapper,
  StyledBreadcrumbs
} from './SiteBreadcrumb-styled.js';

import { Crumb } from 'calcite-react/Breadcrumbs';

const SiteBreadcrumb = () => {
  return (
    <StyledBreadcrumbsWrapper>
      <StyledBreadcrumbs dividerCharacter="»">
        <Crumb href="http://www.un.org/">United Nations</Crumb>
        <Crumb href="https://www.un.org/development/desa">
          Department of Economic and Social Affairs
        </Crumb>
        <Crumb href="https://unstats.un.org/home/">Statistics Division</Crumb>
        <Crumb href="#">Country Profile</Crumb>
      </StyledBreadcrumbs>
    </StyledBreadcrumbsWrapper>
  );
};

// SiteBreadcrumb.propTypes = {
//   value: PropTypes.number.isRequired,
//   description: PropTypes.string
// };

export default SiteBreadcrumb;
