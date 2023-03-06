import * as React from 'react';
import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';

import s from './ChangeRegisterMenu.module.css';

import upperCaseIcon from 'assets/images/upperCase.png';
import { useNotes } from 'store';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: '#1E1E23',
    border: '1px solid #76767C',
    color: '#76767C',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '&:hover': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
const StyledButton = styled(Button)`
  outline: none;
  border-radius: 10px;
  padding: 0;
  &:hover {
    background-color: #2f2f34;
  }
  &:focus {
    outline: none;
  }
`;

export function ChangeRegisterMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { selectedText, onEditField } = useNotes();
  const open = Boolean(anchorEl);

  const changeToUpperCase = () => {
    if (selectedText.target.selectionStart !== selectedText.target.selectionEnd) {
      const selected = selectedText.target.value.slice(
        selectedText.target.selectionStart,
        selectedText.target.selectionEnd,
      );
      selectedText.target.setRangeText(selected.toUpperCase());

      onEditField(selectedText.target.value);
    }
    setAnchorEl(null);
  };

  const changeToLowerCase = () => {
    if (selectedText.target.selectionStart !== selectedText.target.selectionEnd) {
      const selected = selectedText.target.value.slice(
        selectedText.target.selectionStart,
        selectedText.target.selectionEnd,
      );
      selectedText.target.setRangeText(selected.toLowerCase());

      onEditField(selectedText.target.value);
    }
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton
        onClick={handleClick}
        endIcon={<ExpandMoreIcon sx={{ color: '#828287' }} />}
        disabled={selectedText === null}
      >
        <img src={upperCaseIcon} alt="upperCaseIcon" className={s.icon} />
      </StyledButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={changeToUpperCase} disableRipple>
          ВСЕ ПРОПИСНЫЕ
        </MenuItem>
        <MenuItem onClick={changeToLowerCase} disableRipple>
          все строчные
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
