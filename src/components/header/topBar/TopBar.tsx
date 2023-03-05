import React from 'react';

import editIcon from '../../../assets/images/editing.png';
import upperCaseIcon from '../../../assets/images/upperCase.png';
import { useNotes } from '../../../store/NoteContext';
import { StyledButtonIcon } from '../../common/styledButtonIcon/StyledButtonIcon';

import s from './TopBar.module.css';

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
