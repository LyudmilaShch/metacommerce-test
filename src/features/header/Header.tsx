import s from './Header.module.css';
import { HeaderForDisplay } from './headerForDisplayNotes/HeaderForDisplay';
import { HeaderForEditNote } from './headerForEditNote/HeaderForEditNote';

export function Header() {
  return (
    <div className={s.headerContainer}>
      <HeaderForDisplay />
      <HeaderForEditNote />
    </div>
  );
}
