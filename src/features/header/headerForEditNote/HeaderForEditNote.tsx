import s from './HeaderForEditNote.module.css';

import editIcon from 'assets/editing.png';
import SearchInput from 'components/searchInput/SearchInput';
import upperCaseIcon from 'assets/upperCase.png';

export function HeaderForEditNote() {
  return (
    <div className={s.headerForEditNoteContainer}>
      <div className={s.iconsContainer}>
        <img src={editIcon} alt="editIcon" className={s.icon} />
        <img src={upperCaseIcon} alt="upperCaseIcon" className={s.icon} />
      </div>
      <div className={s.searchInputContainer}>
        <SearchInput />
      </div>
    </div>
  );
}
