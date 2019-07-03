import React, { Component } from 'react';

import './App.css';

import AppContainer from './components/pageContainers/AppContainer';
import GoalContainer from './components/pageContainers/GoalContainer';

import countryList from './json/countryList.json';

class App extends Component {
  state = {
    countryJson: null,
    metricsJson: null,
    countryListItem: null,
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

    const profilePromise = import(
      `./json/countryProfiles/country_profile${countryInfo.M49}.json`
    );

    const metricsPromise = import(
      `./json/countryProfiles/SYB_country_profile${countryInfo.M49}.json`
    );

    Promise.all([profilePromise, metricsPromise])
      .then(([profile, metrics]) => {
        const { default: countryJson } = profile;
        const { default: metricsJson } = metrics;
        this.setState({
          countryListItem: countryInfo,
          countryJson,
          metricsJson,
          isFetchingProfile: false
        });
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
        countryListItem={this.state.countryListItem}
        countryList={countryList}
        countryJson={this.state.countryJson}
        metricsJson={this.state.metricsJson}
        isLoading={this.state.isFetchingProfile}
      />
    );
  }
}

export default App;
