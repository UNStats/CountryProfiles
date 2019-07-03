import React, { Component } from 'react';

import { StyledImageCard } from './CountryHeader-styled';

class CountryMap extends Component {
  state = { image: null };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.code !== this.props.code) {
      this.getCountryImage();
    }
  }

  async componentDidMount() {
    this.getCountryImage();
  }

  getCountryImage = async () => {
    const { default: image } = await import(
      `../../assets/countryThumbnails/${this.props.code}.png`
    );
    this.setState({ image });
  };

  render() {
    if (!this.state.image) {
      return 'loading...';
    }

    return <StyledImageCard image={this.state.image} />;
  }
}

export default CountryMap;
