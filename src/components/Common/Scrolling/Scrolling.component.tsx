import { forwardRef } from 'react';
import classNames from 'classnames';

import { ScrollingProps } from './Scrolling.types';

import styles from './Scrolling.module.scss';

export const ScrollingComponent = forwardRef<HTMLDivElement, ScrollingProps>(
  ({ horizontal, vertical, onClick, className, style, children }, ref) => {
    const scrollingClass = classNames(
      styles.scrolling,
      {
        [styles[`scrolling_horizontal`]]: horizontal,
        [styles[`scrolling_vertical`]]: vertical,
      },
      className,
    );

    return (
      <div ref={ref} className={scrollingClass} style={style} onClick={onClick}>
        {children}
      </div>
    );
  },
);

ScrollingComponent.displayName = 'Scrolling';
