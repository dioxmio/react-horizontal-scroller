import React, { Component } from 'react';
import { HorizontalScrollLayout } from './horizontal-scroll-layout';
import { Motion, spring } from 'react-motion';

export class ReactHorizontalScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTo: 0
    };
    this.currentPoint = undefined;
    this.scrollAnimate = this.scrollAnimate.bind(this);
  }

  scrollAnimate(scrollTo) {
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

