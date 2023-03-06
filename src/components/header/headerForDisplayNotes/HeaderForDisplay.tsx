import React from 'react';

import { useNavigate } from 'react-router-dom';

import s from './HeaderForDisplay.module.css';

import gridIcon from 'assets/images/grid.png';
import listIcon from 'assets/images/list.png';
import { PATH } from 'assets/routes/path';
import { RemoveNoteModal, StyledButtonIcon } from 'components';
import { useNotes } from 'store';

export function HeaderForDisplay() {
  const navigate = useNavigate();
  const { setDisplayType } = useNotes();

  const listIconHandler = () => {
    navigate(PATH.LIST);
    setDisplayType('list');
  };
  const gridIconHandler = () => {
    navigate(PATH.TILED_LIST);
    setDisplayType('tiledList');
  };

  return (
    <>
      <div className={s.iconsContainer}>
        <StyledButtonIcon src={listIcon} onClickHandler={listIconHandler} />
        <StyledButtonIcon src={gridIcon} onClickHandler={gridIconHandler} />
      </div>
      <div className={s.deleteIcon}>
        <RemoveNoteModal />
      </div>
    </>
  );
}
