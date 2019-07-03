import React, { Component } from 'react';

import { StyledImageCard } from './CountryHeader-styled';

// TODO: this is a placeholder
import UgandaMap from '../../assets/uganda_map.png';

class CountryMap extends Component {
  state = { image: UgandaMap };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.code !== this.props.code) {
  //     this.getCountryImage();
  //   }
  // }

  // async componentDidMount() {
  //   this.getCountryImage();
  // }

  // getCountryImage = async () => {
  //   const { default: image } = await import(
  //     `../../assets/countryThumbnails/${this.props.code}.png`
  //   );
  //   this.setState({ image });
  // };

  render() {
    if (!this.state.image) {
      return 'loading...';
    }

    return <StyledImageCard image={this.state.image} />;
  }
}

export default CountryMap;
