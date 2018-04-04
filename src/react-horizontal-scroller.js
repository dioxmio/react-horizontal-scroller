import React, { Component } from 'react';
import { HorizontalScrollLayout } from './horizontal-scroll-layout';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

export class ReactHorizontalScroller extends Component {
  static propTypes = {
    snapToPage: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollTo: 0
    };
  }

  scrollAnimate = (scrollTo) => {
    this.setState({ scrollTo });
  }

  render() {
    return (
      <div>
        <Motion
          style={{scrollLeft: spring(this.state.scrollTo)}}>
          { interpolatedStyle => 
            <HorizontalScrollLayout
              scrollAnimate={this.scrollAnimate}
              interpolatedStyle={interpolatedStyle} 
              {...this.props} /> 
          }
        </Motion>
      </div>
    );
  }
}

