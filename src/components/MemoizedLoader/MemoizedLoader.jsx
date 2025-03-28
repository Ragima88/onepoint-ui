import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

const Loader = ({ variant, size = 1, color }) => {
  useMemo(() => {
    import(`./loader-${variant}.css`);
  }, [variant]);

  // Loader content based on variant
  const loaderContent = useMemo(() => {
    switch (variant) {
      case 'waterfall':
        return (
          <div className="loader-waterfall-in">
            <span className="let1">l</span>
            <span className="let2">o</span>
            <span className="let3">a</span>
            <span className="let4">d</span>
            <span className="let5">i</span>
            <span className="let6">n</span>
            <span className="let7">g</span>
          </div>
        );
      case 'twins':
        return <div className="loader-twins-in"></div>;
      case 'pulse':
        return (
          <div className={`loader-pulse-in`}>
            <div style={{ borderColor: color }}></div>
            <div style={{ borderColor: color }}></div>
          </div>
        );
      case 'carousel':
        return (
          <div className="loader-carousel-in">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        );
      case 'text':
        return <div className="loader-text-in"></div>;
      case 'blink':
        return <div className="loader-blink-in"></div>;
      case 'clock':
        return <div className="loader-clock-in"></div>;
      default:
        return null;
    }
  }, [variant]);

  return (
    <div className={`loader-${variant}`} style={{ fontSize: `${size}rem` }}>
      {loaderContent}
    </div>
  );
};

Loader.propTypes = {
  variant: PropTypes.oneOf([
    'waterfall',
    'twins',
    'pulse',
    'carousel',
    'text',
    'blink',
    'clock',
  ]).isRequired,
  size: PropTypes.number, // Size in rem
  color: PropTypes.string,
};

const MemoizedLoader = React.memo(Loader);

export default MemoizedLoader;
