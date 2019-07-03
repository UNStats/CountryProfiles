import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Modal from 'calcite-react/Modal';
import { CalciteH3 } from 'calcite-react/Elements/Elements-styled';
import Button from 'calcite-react/Button';
import XIcon from 'calcite-ui-icons-react/XIcon';

import AppHeader from '../../AppHeader';
import CountryHeader from '../../CountryHeader';
import SiteBreadcrumb from '../../SiteBreadcrumb';
import Nav from '../../Nav';
import CountrySelector from '../../CountrySelector';
import Goal from '../../Goal';

import { StyledAppContainer, dialogStyle } from './AppContainer-styled';
import {
  StyledModalHeader,
  StyledContentContainer,
  StyledSectionContainer,
  StyledSection
} from '../../StyledComponents';

import UgandaMap from '../../../assets/uganda_map.png';

import sdgsMoreInfo from '../../../json/sdgs-more-info.json';

class AppContainer extends Component {
  state = {
    showCountrySelector: false
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

  getNav = () => {
    if (this.props.countryJson) {
      return (
        <Nav
          goals={this.props.countryJson.goals}
          goalInfos={sdgsMoreInfo.data}
        />
      );
    }

    return null;
  };

  getGoalSections = () => {
    if (this.props.countryJson) {
      return this.props.countryJson.goals.map(goal => {
        const goalInfo = sdgsMoreInfo.data.find(
          sdgInfo => sdgInfo.goal === Number(goal.goalCode)
        );

        return (
          <StyledSection key={goal.goalCode} id={`goal-${goal.goalCode}`}>
            <Goal
              goal={goal}
              goalInfo={goalInfo}
              countryCode={this.props.countryJson.country_code}
            />
          </StyledSection>
        );
      });
    }

    return null;
  };

  render() {
    const countryCode = this.props.match.params.countryCode;

    // Just render the headers and country selector if there's no country code
    if (!countryCode) {
      return (
        <StyledAppContainer className="App">
          <SiteBreadcrumb />
          <AppHeader
            showCountrySelector={() =>
              this.setState({ showCountrySelector: true })
            }
          />
          <Modal
            dialogStyle={dialogStyle}
            shouldCloseOnOverlayClick={false}
            shouldCloseonEsc={false}
            appElement={document.getElementById('root')}
            open={true}
          >
            <StyledModalHeader>
              <CalciteH3>Select a Country</CalciteH3>
            </StyledModalHeader>
            <CountrySelector
              countryList={this.props.countryList}
              onCountrySelect={this.updateRoute}
            />
          </Modal>
        </StyledAppContainer>
      );
    }

    return (
      <StyledAppContainer className="App" isLoading={this.props.isLoading}>
        <SiteBreadcrumb />
        <AppHeader
          showCountrySelector={() =>
            this.setState({ showCountrySelector: true })
          }
        />
        <CountryHeader
          name={this.props.countryJson && this.props.countryJson.country_name}
          metricsJson={this.props.metricsJson}
          image={UgandaMap}
        />
        <StyledContentContainer>
          {this.getNav()}
          <StyledSectionContainer>
            {this.getGoalSections()}
          </StyledSectionContainer>
        </StyledContentContainer>
        <Modal
          dialogStyle={dialogStyle}
          appElement={document.getElementById('root')}
          onRequestClose={() => this.setState({ showCountrySelector: false })}
          open={this.state.showCountrySelector}
        >
          <StyledModalHeader>
            <CalciteH3>Select a Country</CalciteH3>
            <Button
              iconButton
              icon={<XIcon />}
              onClick={() => this.setState({ showCountrySelector: false })}
            />
          </StyledModalHeader>
          <CountrySelector
            countryList={this.props.countryList}
            onCountrySelect={this.updateRoute}
          />
        </Modal>
      </StyledAppContainer>
    );
  }
}

export default withRouter(AppContainer);
