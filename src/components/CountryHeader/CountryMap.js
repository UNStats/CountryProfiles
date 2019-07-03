import React, { Component } from 'react';

import { StyledImageCard } from './CountryHeader-styled';

class CountryMap extends Component {
  state = { image: null };

  async componentDidMount() {
    const { default: image } = await import(
      `../../assets/countryThumbnails/${this.props.code || '004'}.png`
    );

    console.log(image);
    this.setState({ image });
  }

  render() {
    if (!this.state.image) {
      return 'loading...';
    }

    return <StyledImageCard image={this.state.image} />;
  }
}

export default CountryMap;
