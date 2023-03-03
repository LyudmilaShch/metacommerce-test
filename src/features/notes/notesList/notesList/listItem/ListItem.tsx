import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { noteType } from '../../../Notes';

import s from './ListItem.module.css';

export default function ListItemComponent({ name, date, text }: noteType) {
  return (
    <ListItemButton className={s.ListItemContainer}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Typography component="span" variant="body2" className={s.primaryText}>
              {name}
            </Typography>
          }
          secondary={
            <Typography className={s.secondaryText}>
              {date}
            <div className={s.itemText}>{text}</div>
            </Typography>
          }
        />
      </ListItem>
    </ListItemButton>
  );
}
