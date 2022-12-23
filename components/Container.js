

import React from 'react';
import buildClassName from '../lib/helpers/buildClassName';

const Container = React.forwardRef(({
  className, 
  remove,
  children,
  onClick,
  style,
  onMouseDown,
  onMouseUp
}, ref) => {
  return (
    <div 
    {...{
      onClick, 
      style,
      onMouseDown,
      onMouseUp,
    }}
    ref={ref} 
    className={buildClassName({
      extend: className,
      remove
    })}>
      {children}
    </div>
  );
});

export default Container;
