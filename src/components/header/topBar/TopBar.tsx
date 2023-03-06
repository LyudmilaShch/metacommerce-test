import React from 'react';

import s from './TopBar.module.css';

import editIcon from 'assets/images/editing.png';
import { ChangeRegisterMenu, SearchInput, StyledButtonIcon } from 'components';
import { useNotes } from 'store/';

export function TopBar() {
  const { onCreateNote } = useNotes();

  return (
    <>
      <div className={s.iconsContainer}>
        <StyledButtonIcon src={editIcon} onClickHandler={onCreateNote} />
        <div>
          <ChangeRegisterMenu />
        </div>
      </div>
      <div className={s.searchInputContainer}>
        <SearchInput />
      </div>
    </>
  );
}
