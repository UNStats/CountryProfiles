import React from 'react';
import { storiesOf } from '@storybook/react';

// general app components
import SiteBreadcrumb from '../components/SiteBreadcrumb';
import AppHeader from '../components/AppHeader';
import CountryHeader from '../components/CountryHeader';
import CountrySelector from '../components/CountrySelector';
import GoalHeader from '../components/GoalHeader';
import Goal from '../components/Goal';
import Series from '../components/Series';

// Complex stories
import NavStory from './NavStory';

// data viz components
import YesNoIndicator from '../components/data_viz/YesNoIndicator';
import MetricIndicator from '../components/data_viz/MetricIndicator/MetricIndicator';
import TimeSeriesChart from '../components/data_viz/TimeSeriesChart/TimeSeriesChart';

// images
import UgandaMap from '../assets/uganda_map.png';

// json
import countries from '../json/countryList.json';
import country from '../json/countryProfiles/country profile 800 Uganda.json';
import sdgsMoreInfo from '../json/sdgs-more-info.json';

const goal = country.goals.find(goal => goal.goalCode === '16');
const timeSeries = goal.targets[0].indicators[0].facts[0];
const metricSeries = goal.targets[1].indicators[0].facts[0];
const goalInfo = sdgsMoreInfo.data.find(sdgInfo => sdgInfo.goal === 16);

storiesOf('SiteBreadcrumb', module).add('default', () => <SiteBreadcrumb />);

storiesOf('AppHeader', module).add('default', () => <AppHeader />);

storiesOf('Nav', module).add('default', () => <NavStory />);

storiesOf('CountryHeader', module).add('default', () => {
  const { country_name } = country;
  return (
    <CountryHeader
      name={country_name}
      population="42.86 million"
      capital="Kampala"
      currency="Ugandan Shilling"
      image={UgandaMap}
    />
  );
});

storiesOf('CountrySelector', module).add('default', () => (
  <CountrySelector
    countries={countries}
    onCountrySelect={e => console.log('Country selected: ', e)}
  />
));

storiesOf('GoalHeader', module).add('default', () => (
  <GoalHeader goal={goal} goalInfo={goalInfo} />
));

storiesOf('Goal', module).add('default', () => (
  <Goal goal={goal} goalInfo={goalInfo} />
));

storiesOf('Series', module).add('default', () => (
  <Series series={timeSeries} goalInfo={goalInfo} />
));

storiesOf('YesNoIndicator', module).add('default', () => (
  <YesNoIndicator
    goalInfo={goalInfo}
    value={true}
    description="The sky is blue."
  />
));

storiesOf('MetricIndicator', module).add('default', () => (
  <MetricIndicator series={metricSeries} goalInfo={goalInfo} />
));

storiesOf('TimeSeriesChart', module).add('default', () => (
  <TimeSeriesChart series={timeSeries} goalInfo={goalInfo} />
));
