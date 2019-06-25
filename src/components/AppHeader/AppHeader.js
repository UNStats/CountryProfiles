import React from 'react';
// import PropTypes from 'prop-types';

import { SpacerDiv } from './AppHeader-styled';

import TopNav, {
  TopNavBrand,
  TopNavTitle,
  TopNavList,
  TopNavActionsList
} from 'calcite-react/TopNav';
import Button from 'calcite-react/Button';
import SearchIcon from 'calcite-ui-icons-react/SearchIcon';

import UnSdgLogo from '../../assets/UN_SDG_Logo.svg';

const AppHeader = ({ showCountrySelector }) => {
  return (
    <TopNav>
      <SpacerDiv>
        <TopNavBrand href="#" src={UnSdgLogo} />
        <TopNavTitle href="#">UN Country Profile</TopNavTitle>
        <TopNavList />
        <TopNavActionsList>
          <Button
            icon={<SearchIcon size={16} />}
            iconPosition="before"
            onClick={showCountrySelector}
          >
            Select a Country
          </Button>
        </TopNavActionsList>
      </SpacerDiv>
    </TopNav>
  );
};

// AppHeader.propTypes = {
//   value: PropTypes.number.isRequired,
//   description: PropTypes.string
// };

export default AppHeader;
