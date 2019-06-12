// Framework and third-party non-ui
import React, { Component } from 'react';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import { StyledScrollToTopContainer, TooltipSpan } from './Nav-styled';
import ScrollToTopIcon from '../../assets/ScrollToTopArrow.svg';

// App components

// Third-party components (buttons, icons, etc.)
import Tooltip from 'calcite-react/Tooltip';

// JSON

// CSS

class ScrollToTop extends Component {
  state = {
    showBtn: false
  };
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler, false);
  }

  scrollHandler = () => {
    this.setState({
      showBtn: window.scrollY > 450
    });
  };

  scrollTop = () => {
    window.scroll(0, 0);
  };

  render() {
    if (this.state.showBtn) {
      return (
        <StyledScrollToTopContainer onClick={this.scrollTop}>
          <Tooltip
            title={<TooltipSpan>Back to top</TooltipSpan>}
            placement="right"
          >
            <img src={ScrollToTopIcon} alt="Up arrow icon" />
          </Tooltip>
        </StyledScrollToTopContainer>
      );
    }

    return null;
  }
}

export default ScrollToTop;
