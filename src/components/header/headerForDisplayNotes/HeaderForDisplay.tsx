import React from 'react';

import { RemoveNoteModal } from '../../modals/RemoveNoteModal';

import s from './HeaderForDisplay.module.css';

import gridIcon from 'assets/grid.png';
import listIcon from 'assets/list.png';
import { StyledButtonIcon } from 'components/common/styledButtonIcon/StyledButtonIcon';

type HeaderForDisplayType = {
  changeListDisplay: (isListDisplay: boolean) => void;
};
export function HeaderForDisplay({ changeListDisplay }: HeaderForDisplayType) {
  return (
    <>
      <div className={s.iconsContainer}>
        <StyledButtonIcon src={listIcon} onClickHandler={() => changeListDisplay(true)} />
        <StyledButtonIcon
          src={gridIcon}
          onClickHandler={() => changeListDisplay(false)}
        />
      </div>
      <div className={s.deleteIcon}>
        <RemoveNoteModal />
      </div>
    </>
  );
}
