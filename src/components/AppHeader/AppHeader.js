import React from 'react';
// import PropTypes from 'prop-types';

import { StyledTopNav, SpacerDiv, TopNavSubTitle } from './AppHeader-styled';

import {
  TopNavBrand,
  TopNavTitle,
  TopNavList,
  TopNavActionsList
} from 'calcite-react/TopNav';
import Button from 'calcite-react/Button';
import SearchIcon from 'calcite-ui-icons-react/SearchIcon';
import HamburgerIcon from 'calcite-ui-icons-react/HamburgerIcon';

import UnSdgLogo from '../../assets/UN_SDG_Logo.svg';

const AppHeader = ({
  showCountrySelector,
  showMobileDrawer,
  countryName,
  goals,
  goalInfos,
  isMobile
}) => {
  const getActionButtons = () => {
    if (isMobile) {
      // Get hamburger menu
      return (
        <Button
          icon={<HamburgerIcon size={24} />}
          iconButton
          onClick={showMobileDrawer}
        />
      );
    }

    return (
      <Button
        icon={<SearchIcon size={16} />}
        iconPosition="before"
        onClick={showCountrySelector}
      >
        Select a Country
      </Button>
    );
  };

  return (
    <StyledTopNav isMobile={isMobile}>
      <SpacerDiv>
        <TopNavBrand href="#" src={UnSdgLogo} />
        <TopNavTitle href="#">SDG Country Profile</TopNavTitle>
        <TopNavSubTitle href="#">{countryName}</TopNavSubTitle>
        <TopNavList />
        <TopNavActionsList>{getActionButtons()}</TopNavActionsList>
      </SpacerDiv>
    </StyledTopNav>
  );
};

// AppHeader.propTypes = {
//   value: PropTypes.number.isRequired,
//   description: PropTypes.string
// };

export default AppHeader;
