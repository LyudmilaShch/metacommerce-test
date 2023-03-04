import * as React from 'react';

import List from '@mui/material/List';

import { notesDataType } from '../../Notes';

import ListItemComponent from './listItem/ListItem';
import s from './NotesList.module.css';

type NotesListType = {
  notesData: notesDataType;
  selected: number;
  changeSelectedItem: (newSelected: number) => void;
};

export function NotesList({ notesData, selected, changeSelectedItem }: NotesListType) {
  return (
    <div className={s.notesListContainer}>
      <p className={s.dateWithLine}>Сегодня</p>
      <List className={s.notesList}>
        {notesData.map(el => (
          <ListItemComponent
            key={el.id}
            item={el}
            selected={selected}
            changeSelectedItem={changeSelectedItem}
          />
        ))}
      </List>
    </div>
  );
}
