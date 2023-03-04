import s from './TopBar.module.css';

import editIcon from 'assets/editing.png';
import upperCaseIcon from 'assets/upperCase.png';
import SearchInput from 'components/common/searchInput/SearchInput';

export function TopBar() {
  return (
    <>
      <div className={s.iconsContainer}>
        <img src={editIcon} alt="editIcon" className={s.icon} />
        <img src={upperCaseIcon} alt="upperCaseIcon" className={s.icon} />
      </div>
      <div className={s.searchInputContainer}>
        <SearchInput />
      </div>
    </>
  );
}
