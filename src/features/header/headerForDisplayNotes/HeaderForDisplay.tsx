import React from 'react';

import s from './HeaderForDisplay.module.css';

import binIcon from 'assets/bin.png';
import gridIcon from 'assets/grid.png';
import listIcon from 'assets/list.png';

export function HeaderForDisplay() {
  return (
    <div className={s.headerForDisplayContainer}>
      <div className={s.iconsContainer}>
        <img src={listIcon} alt="listIcon" className={s.icon} />
        <img src={gridIcon} alt="gridIcon" className={s.icon} />
      </div>
      <div className={s.deleteIcon}>
        <img src={binIcon} alt="binIcon" className={s.icon} />
      </div>
    </div>
  );
}
