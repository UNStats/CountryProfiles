import React, { Component } from 'react';

import { StyledImageCard } from './CountryHeader-styled';

// TODO: this is a placeholder
import WorldMap from '../../assets/WorldMap.png';

class CountryMap extends Component {
  state = { image: WorldMap, isLoading: true };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.code !== this.props.code) {
      this.getCountryImage();
    }
  }

  async componentDidMount() {
    this.getCountryImage();
  }

  getCountryImage = async () => {
    this.setState({ isLoading: true });
    const { default: image } = await import(
      `../../assets/countryThumbnails/${this.props.code}.png`
    );
    this.setState({ image, isLoading: false });
  };

  render() {
    if (!this.state.image) {
      return 'loading...';
    }

    return (
      <StyledImageCard
        isLoading={this.state.isLoading}
        image={this.state.image}
      />
    );
  }
}

export default CountryMap;
