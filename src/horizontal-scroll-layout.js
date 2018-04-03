import React, { Component } from 'react';
import { HorizontalItem } from './horizontal-item';
import { getPointFromTouch, getNewPointFromEvent } from './mouse-event-utils';
import * as _ from 'lodash';
import './horizontal-scroll-layout.css';
import PropTypes from 'prop-types';

export class HorizontalScrollLayout extends Component {
  static propTypes = {
    snapToPage: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.currentPage = 0;
    this.pageResized = _.debounce(this.pageResized, 100);
  }

  componentDidMount() {
    const { scrollContainer } = this.refs;
    scrollContainer.addEventListener('touchstart', this.onTouchStart);
    document.addEventListener('mouseup', this.onTouchEnd);
    window.addEventListener('resize', this.pageResized);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onTouchEnd);
  }

  componentDidUpdate() {
    const { scrollContainer } = this.refs;
    const { interpolatedStyle } = this.props;
    if (scrollContainer && interpolatedStyle) {
      scrollContainer.scrollLeft = interpolatedStyle.scrollLeft;
    }
  }

  renderItems(interpolatingStyle) {
    const { children } = this.props;
    return children.map((item, index) => {
      return (
        <HorizontalItem key={index}>
          {item}
        </HorizontalItem>
      );
    })
  }

  scrollToPosition = (offsetX, factor) => {
    const { scrollContainer } = this.refs;
    const { scrollAnimate } = this.props;
    scrollAnimate(scrollContainer.scrollLeft + offsetX * factor);
  }

  onWheel = (e) => {
    e.preventDefault();
  }

  onTouchStart = (e) => {
    e.preventDefault();
    this.currentPoint = getNewPointFromEvent(e);
  }

  onTouchMove = (e) => {
    e.preventDefault();
    if (!this.currentPoint) {
      return;
    }

    let newPoint = getNewPointFromEvent(e);
    this.scrollToPosition(this.currentPoint.x - newPoint.x, 13);
    this.currentPoint = newPoint;
  }

  isSnapEnabled() {
    const { snapToPage } = this.props;
    return snapToPage !== false;
  }

  pageResized = () => {
    if (!this.isSnapEnabled()) {
      return;
    }
    const { scrollContainer } = this.refs;
    const width = scrollContainer.clientWidth;
    const { scrollAnimate } = this.props;
    scrollAnimate(this.currentPage * width);
  }

  snapToPage = () => {
    if (!this.isSnapEnabled()) {
      return;
    }
    const { scrollContainer } = this.refs;
    const { scrollAnimate } = this.props;
    const width = scrollContainer.clientWidth;
    this.currentPage = Math.round(scrollContainer.scrollLeft/width);
    scrollAnimate(this.currentPage * width);
  }

  onTouchEnd = (e) => {
    e.preventDefault();
    this.snapToPage();
    this.currentPoint = undefined;
  }

  render() {
    const componentStyle = { 
      color: 'black',
      display: 'flex',
      touchAction: 'pan-x',
      fontSize: 20,
      backgroundColor: 'var(--scroller-container-bg-color)',
      padding: 'var(--scroller-container-padding)',
      margin: 'var(--scroller-container-margin)'
    };
    
    return (
      <div className="react-scroller">
        <div style={componentStyle} 
          ref="scrollContainer"
          onWheel={this.onWheel}
          onMouseDown={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
          onMouseUp={this.onTouchEnd}
          onMouseMove={this.onTouchMove}
          onTouchMove={this.onTouchMove}>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}


