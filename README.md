# React Horizontal Scroller

### Motivation

This is a component to visualize content in an horizontal maner like a carousel. Scroll would be scrolled using the mouse instead of the mouse wheel. That would lead to a similar behaviour on mobile and desktop devices. By default after scroll has ended (mouse or touch event is up) then it will snap the current page to the view. This behaviour can be disabled if wanted.

### Code

```js
import { ReactHorizontalScroller } from '../src/react-horizontal-scroller';
// In your render...
<ReactHorizontalScroller>
  <div className="first-div">
    First Div
  </div>
  <div className="second-div">
    Second Div
  </div>
  <div className="third-div">
    Third Div
  </div>
</ReactHorizontalScroller>
```

If you want to disabled snap to page feature just do add `snapToPage={false}` property to `ReactHorizontalScroller`

### Install

- Npm: `npm install --save react-horizontal-scroller`

### Demos

#### Try the Demos Locally
```sh
git clone https://github.com/dioxmio/react-horizontal-scroller.git
cd react-horizontal-scroller
yarn install
cd example
webpack
open index.html in any browser
```

### API

Exports:
- `ReactHorizontalScroller`

### Contribution

Any help is always welcome. If an issue is found please report it via github and feel free to open a PR and work on it :) If you don't have to work on it anybody is welcome in helping.



