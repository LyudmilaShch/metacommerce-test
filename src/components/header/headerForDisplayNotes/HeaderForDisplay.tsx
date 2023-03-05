import React from 'react';

import { useNavigate } from 'react-router-dom';

import backIcon from '../../../assets/images/back.png';
import gridIcon from '../../../assets/images/grid.png';
import listIcon from '../../../assets/images/list.png';
import { RemoveNoteModal } from '../../modals/RemoveNoteModal';

import s from './HeaderForDisplay.module.css';

import { PATH } from 'assets/routes/path';
import { StyledButtonIcon } from 'components/common/styledButtonIcon/StyledButtonIcon';

export function HeaderForDisplay() {
  const navigate = useNavigate();
  return (
    <>
      <div className={s.iconsContainer}>
        <StyledButtonIcon src={listIcon} onClickHandler={() => navigate(PATH.LIST)} />
        <StyledButtonIcon
          src={gridIcon}
          onClickHandler={() => navigate(PATH.TILED_LIST)}
        />
        <StyledButtonIcon
          src={backIcon}
          onClickHandler={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className={s.deleteIcon}>
        <RemoveNoteModal />
      </div>
    </>
  );
}
