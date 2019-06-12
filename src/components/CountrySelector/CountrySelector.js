import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledCountrySelector,
  StyledFormControl
} from './CountrySelector-styled';

import Search from 'calcite-react/Search';
import { ListItem, ListItemTitle } from 'calcite-react/List';

import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

class CountrySelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      filteredList: this.getFilteredList(''),
      searchInput: null
    };
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.searchInput !== this.state.searchInput) {
      this.state.searchInput.focus();
    }
  }

  setSearchInput = searchInput => {
    this.setState({
      searchInput
    });
  };

  clearSearch = () => {
    this.setState({
      inputValue: '',
      filteredList: this.getFilteredList('')
    });
  };

  onUserAction = inputValue => {
    this.setState({
      inputValue: inputValue,
      filteredList: this.getFilteredList(inputValue)
    });
  };

  getCountryListItem = ({ index, style }) => {
    const country = this.state.filteredList[index];

    return (
      <ListItem
        onClick={() => this.props.onCountrySelect(country)}
        style={style}
      >
        <ListItemTitle>{country.Name}</ListItemTitle>
      </ListItem>
    );
  };

  getFilteredList = inputValue => {
    const { countryList } = this.props;

    return countryList.filter(
      country =>
        country.Name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };

  render() {
    return (
      <StyledCountrySelector>
        <StyledFormControl>
          <Search
            minimal
            fullWidth
            inputRef={this.setSearchInput}
            placeholder="Search Countries..."
            inputValue={this.state.inputValue}
            onUserAction={this.onUserAction}
            onRequestClear={this.clearSearch}
          />
        </StyledFormControl>

        <AutoSizer>
          {({ width, height }) => (
            <List
              height={height}
              itemCount={this.state.filteredList.length}
              itemSize={45.53}
              width={width}
            >
              {this.getCountryListItem}
            </List>
          )}
        </AutoSizer>
      </StyledCountrySelector>
    );
  }
}

CountrySelector.propTypes = {
  countryList: PropTypes.array.isRequired,
  onCountrySelect: PropTypes.func.isRequired
};

export default CountrySelector;
