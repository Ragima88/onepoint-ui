import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import Icon from '../Icon/Icon';
import { Spacer_1 } from '../Spacer/shortcuts/Spacers';
import styles from './drawer.module.scss';
import chevron from './icons/chevron-selector-vertical.svg';
import xClose from './icons/x-close.svg';

const Drawer = ({
  isOpen,
  onClose,
  size,
  children,
  className,
  iconSize = 2.5,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const drawerRef = useRef(null);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //     setIsExpanded(false);
  //   }
  // }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsExpanded(false);
    }
  }, [isOpen]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    onClose();
    setIsExpanded(false);
  };

  const sizeStyle =
    size && window.innerWidth < 600
      ? {
          height: `${size}rem`,
        }
      : {
          height: 'auto',
        };

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
      onClick={handleClose}
    >
      <div
        className={`${className} ${styles.drawer} ${isOpen ? styles.open : styles.close} ${isExpanded ? styles.expanded : ''}`}
        style={sizeStyle}
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
      >
        <Icon
          className={styles['close-button']}
          src={xClose}
          size={iconSize}
          onClick={handleClose}
          tabIndex={0}
        />
        <Spacer_1 />
        {size ? (
          ''
        ) : (
          <Icon
            className={styles['expand-button']}
            src={chevron}
            size={iconSize}
            onClick={handleExpand}
          />
        )}

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  iconSize: PropTypes.number,
};

export default Drawer;
