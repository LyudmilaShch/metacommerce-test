import React from 'react';

import { useNotes } from '../../../store/NoteContext';
import { StyledButtonIcon } from '../../common/styledButtonIcon/StyledButtonIcon';

import s from './TopBar.module.css';

import editIcon from 'assets/editing.png';
import upperCaseIcon from 'assets/upperCase.png';
import SearchInput from 'components/common/searchInput/SearchInput';

export function TopBar() {
  const { onCreateNote } = useNotes();
  return (
    <>
      <div className={s.iconsContainer}>
        <StyledButtonIcon src={editIcon} onClickHandler={onCreateNote} />
        <img src={upperCaseIcon} alt="upperCaseIcon" className={s.icon} />
      </div>
      <div className={s.searchInputContainer}>
        <SearchInput />
      </div>
    </>
  );
}
