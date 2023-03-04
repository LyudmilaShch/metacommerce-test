import React from 'react';

import IconButton from '@mui/material/IconButton/IconButton';
import { styled } from '@mui/material/styles';

import s from './StyledButtonIcon.module.css';

type StyledButtonIconType = {
  src: string;
  onClickHandler: () => void;
};
export function StyledButtonIcon({ src, onClickHandler }: StyledButtonIconType) {
  const StyledButton = styled(IconButton)`
    outline: none;
    border-radius: 10px;
    padding: 0;
    & {
    }
    &:hover {
      background-color: #2f2f34;
    }
    &:focus {
      outline: none;
    }
  `;

  return (
    <StyledButton onClick={onClickHandler}>
      <img src={src} alt={src} className={s.icon} />
    </StyledButton>
  );
}
