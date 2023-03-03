import React, { useState } from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField/TextField';

import s from './SearchInput.module.css';

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

export default function SearchInput() {
  const [value, setValue] = useState('');

  return (
    <CssTextField
      placeholder="Поиск"
      type="text"
      size="small"
      fullWidth
      onChange={e => setValue(e.target.value)}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon className={s.icon} />
          </InputAdornment>
        ),
        endAdornment: value && (
          <HighlightOffIcon className={s.icon} onClick={() => setValue('')} />
        ),
      }}
    />
  );
}
