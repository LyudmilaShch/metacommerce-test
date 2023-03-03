import * as React from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import { notesDataType } from '../../Notes';

import ListItemComponent from './listItem/ListItem';
import s from './NotesList.module.css';

type NotesListType = {
  notesData: notesDataType;
};

export function NotesList({ notesData }: NotesListType) {
  return (
    <div className={s.notesListContainer}>
      <p>Сегодня</p>
      <List className={s.notesList}>
        {notesData.map(el => (
          <ListItemComponent
            name={el.name}
            date={el.date}
            text={el.text}
            key={el.id}
            id={el.id}
          />
        ))}
      </List>
    </div>
  );
}