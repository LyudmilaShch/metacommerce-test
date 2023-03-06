import s from './Header.module.css';
import { HeaderForDisplay } from './headerForDisplayNotes';
import { TopBar } from './topBar';

import { useEditMode, useNotes } from 'store';

export function Header() {
  const { onSetEditMode } = useEditMode();
  const { displayType } = useNotes();

  const HeaderForDisplayStyle = {
    backgroundColor: displayType === 'list' ? `#1E2323` : `#212326`,
    borderRight: displayType === 'list' ? `2px solid black` : ' ',
  };

  const topBarStyle = {
    backgroundColor: displayType === 'list' ? `#1E1E23` : `#212326`,
  };

  return (
    <div className={s.headerContainer}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={s.headerForDisplayContainer}
        style={HeaderForDisplayStyle}
        onClick={() => onSetEditMode(false)}
      >
        <HeaderForDisplay />
      </div>
      {displayType === 'tiledList' && <div className={s.line} />}
      <div className={s.topBarContainer} style={topBarStyle}>
        <TopBar />
      </div>
    </div>
  );
}
