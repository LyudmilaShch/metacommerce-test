import * as React from 'react';

import List from '@mui/material/List';

import { notesDataType } from '../Notes';

import { ListItemComponent } from './listItem';
import s from './NotesList.module.css';

import { UniqueDates } from 'components';

type NotesListType = {
  notesData: notesDataType;
  setEditMode: (value: boolean) => void;
};

export function NotesList({ notesData, setEditMode }: NotesListType) {
  const currentDate = Intl.DateTimeFormat('en-GB').format(new Date());
  const uniqueDates = UniqueDates(notesData);

  return (
    <div className={s.notesListContainer}>
      <List className={s.notesList}>
        <>
          {uniqueDates.map(date => (
            <div key={date}>
              <p className={s.dateWithLine}>{date === currentDate ? 'Сегодня' : date}</p>
              {notesData
                .filter(note => date === Intl.DateTimeFormat('en-GB').format(note.date))
                .map(el => (
                  <ListItemComponent key={el.id} item={el} setEditMode={setEditMode} />
                ))}
            </div>
          ))}
        </>
      </List>
    </div>
  );
}
