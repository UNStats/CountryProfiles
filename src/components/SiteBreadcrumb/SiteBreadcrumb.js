import React from 'react';
// import PropTypes from 'prop-types';

import { StyledBreadcrumbsWrapper } from './SiteBreadcrumb-styled.js';

import Breadcrumbs, { Crumb } from 'calcite-react/Breadcrumbs';

const SiteBreadcrumb = () => {
  return (
    <StyledBreadcrumbsWrapper>
      <Breadcrumbs dividerCharacter="»">
        <Crumb href="http://www.un.org/">United Nations</Crumb>
        <Crumb href="#">SDG</Crumb>
        <Crumb href="#">Country Profiles</Crumb>
      </Breadcrumbs>
    </StyledBreadcrumbsWrapper>
  );
};

// SiteBreadcrumb.propTypes = {
//   value: PropTypes.number.isRequired,
//   description: PropTypes.string
// };

export default SiteBreadcrumb;
