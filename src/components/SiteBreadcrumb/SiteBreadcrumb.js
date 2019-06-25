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
        <Crumb href="#">SDG</Crumb>
        <Crumb href="#">Country Profiles</Crumb>
      </StyledBreadcrumbs>
    </StyledBreadcrumbsWrapper>
  );
};

// SiteBreadcrumb.propTypes = {
//   value: PropTypes.number.isRequired,
//   description: PropTypes.string
// };

export default SiteBreadcrumb;
