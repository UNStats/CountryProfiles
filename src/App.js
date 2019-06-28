import React, { Component } from 'react';

import './App.css';

import AppContainer from './components/pageContainers/AppContainer';
import GoalContainer from './components/pageContainers/GoalContainer';

import countryList from './json/countryList.json';

class App extends Component {
  state = {
    countryJson: null,
    isFetchingProfile: false
  };

  componentDidMount() {
    this.fetchCountryProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.countryCode !== this.props.match.params.countryCode
    ) {
      this.fetchCountryProfile();
    }
  }

  fetchCountryProfile = () => {
    const countryCode = this.props.match.params.countryCode;

    if (!countryCode) {
      return;
    }

    this.setState({ isFetchingProfile: true });
    const countryInfo = countryList.find(
      country => country.ISO3.toLowerCase() === countryCode.toLowerCase()
    );

    import(`./json/countryProfiles/country_profile${countryInfo.M49}.json`)
      .then(({ default: countryJson }) => {
        this.setState({ countryJson, isFetchingProfile: false });
      })
      .catch(err => {
        // Handle failure
        console.error(err);
      });
  };

  updateRoute = selectedCountry => {
    this.props.history.push({
      pathname: `/${selectedCountry.ISO3.toLowerCase()}`,
      search: this.props.history.location.search
    });
    this.setState({
      showCountrySelector: false
    });
  };

  render() {
    const params = new URLSearchParams(window.location.search);
    const goalId = params.get('goal');

    if (goalId && this.state.countryJson) {
      const goal = this.state.countryJson.goals.find(
        goal => goal.goalCode === goalId
      );

      return <GoalContainer goal={goal} />;
    }

    return (
      <AppContainer
        countryList={countryList}
        countryJson={this.state.countryJson}
        isLoading={this.state.isFetchingProfile}
      />
    );
  }
}

export default App;
