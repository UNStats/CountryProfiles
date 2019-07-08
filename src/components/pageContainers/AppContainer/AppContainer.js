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
import MobileNav from '../../Nav/MobileNav';
import CountrySelector from '../../CountrySelector';
import Goal from '../../Goal';

import {
  StyledAppContainer,
  CenteredLoader,
  dialogStyle
} from './AppContainer-styled';

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
    showCountrySelector: false,
    showMobileDrawer: false,
    isMobile: false
  };

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isMobile: window.outerWidth < 1000 });
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
    if (this.props.countryJson && !this.state.isMobile) {
      return (
        <Nav
          goals={this.props.countryJson.goals}
          goalInfos={sdgsMoreInfo.data}
          isMobile={this.state.isMobile}
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
          <StyledSection
            key={goal.goalCode}
            id={`goal-${goal.goalCode}`}
            isMobile={this.state.isMobile}
          >
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

    // if (
    //   !this.props.countryJson ||
    //   !this.state.metricsJson ||
    //   !this.state.countryListItem
    // ) {
    //   return <CenteredLoader />;
    // }

    // Just render the headers and country selector if there's no country code
    if (!countryCode) {
      if (!this.props.countryList) {
        return <CenteredLoader />;
      }

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

    if (
      !this.props.countryJson ||
      !this.props.metricsJson ||
      !this.props.countryList ||
      !this.props.countryListItem
    ) {
      return <CenteredLoader />;
    }

    return (
      <StyledAppContainer className="App" isLoading={this.props.isLoading}>
        <SiteBreadcrumb />
        <AppHeader
          showCountrySelector={() =>
            this.setState({ showCountrySelector: true })
          }
          showMobileDrawer={() => this.setState({ showMobileDrawer: true })}
          goals={this.props.countryJson.goals}
          goalInfos={sdgsMoreInfo.data}
          isMobile={this.state.isMobile}
        />
        <CountryHeader
          code={this.props.countryListItem.M49}
          name={this.props.countryJson && this.props.countryJson.country_name}
          metricsJson={this.props.metricsJson}
          image={UgandaMap}
          isMobile={this.state.isMobile}
        />
        <StyledContentContainer isMobile={this.state.isMobile}>
          {this.getNav()}
          <StyledSectionContainer isMobile={this.state.isMobile}>
            {this.getGoalSections()}
          </StyledSectionContainer>
        </StyledContentContainer>
        <MobileNav
          active={this.state.showMobileDrawer}
          right
          onRequestClose={() => this.setState({ showMobileDrawer: false })}
          goals={this.props.countryJson.goals}
          goalInfos={sdgsMoreInfo.data}
          showCountrySelector={() =>
            this.setState({ showCountrySelector: true })
          }
        />
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
