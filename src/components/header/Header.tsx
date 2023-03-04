import s from './Header.module.css';
import { HeaderForDisplay } from './headerForDisplayNotes/HeaderForDisplay';
import { TopBar } from './topBar/TopBar';

type HeaderType = {
  changeListDisplay: (isListDisplay: boolean) => void;
  isListDisplay: boolean;
};
export function Header({ changeListDisplay, isListDisplay }: HeaderType) {
  const HeaderForDisplayStyle = {
    backgroundColor: isListDisplay ? `#1E2323` : `#212326`,
    borderRight: isListDisplay ? `2px solid black` : ' ',
  };

  const topBarStyle = {
    backgroundColor: isListDisplay ? `#1E1E23` : `#212326`,
  };

  return (
    <div className={s.headerContainer}>
      <div className={s.headerForDisplayContainer} style={HeaderForDisplayStyle}>
        <HeaderForDisplay changeListDisplay={changeListDisplay} />
      </div>
      {!isListDisplay && <div className={s.line} />}
      <div className={s.topBarContainer} style={topBarStyle}>
        <TopBar />
      </div>
    </div>
  );
}
