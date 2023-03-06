import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField/TextField';

import s from './SearchInput.module.css';

import { useNotes } from 'store';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#828287',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#828287',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#828287',
    },
    '&:hover fieldset': {
      borderColor: '#828287',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#828287',
    },
  },
});

export function SearchInput() {
  const { searchParams, setSearchParams } = useNotes();

  return (
    <CssTextField
      placeholder="Поиск"
      type="text"
      size="small"
      value={searchParams}
      onChange={e => {
        setSearchParams(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon className={s.icon} />
          </InputAdornment>
        ),
        endAdornment: searchParams && (
          <HighlightOffIcon className={s.icon} onClick={() => setSearchParams('')} />
        ),
      }}
    />
  );
}
