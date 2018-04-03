import React from 'react';

export function HorizontalItem({ children }) {
  const componentStyle = { 
    display: 'inline-block',
    flex: '0 0 auto',
    width: '100%',
    flexWrap: 'nowrap',
    boxSizing: 'border-box'
  };
  const containerStyle = {
    backgroundColor: 'var(--scroller-item-bg-color)',
    padding: 'var(--scroller-item-padding)',
    margin: 'var(--scroller-item-margin)'
  };
  return (
    <div style={componentStyle}>
      <div style={containerStyle}>
        {children}
      </div>
    </div>
  );
}
