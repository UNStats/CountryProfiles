import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import Container from '../src/stories/Container';

addDecorator(story => <Container story={story} />);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
