import * as React from 'react';

import Grid from '@mui/material/Grid/Grid';

import { NoteType } from '../Notes';

import { CardItem } from './cardItem';
import s from './TiledNodesList.module.css';

import { UniqueDates } from 'components';
import { useNotes } from 'store';

export function TiledNotesList() {
  const { onSearchNotes } = useNotes();
  const uniqueDates = UniqueDates(onSearchNotes);
  const currentDate = Intl.DateTimeFormat('en-GB').format(new Date());
  return (
    <div className={s.TiledNotesListContainer}>
      {uniqueDates.map((date: string) => (
        <div key={date}>
          <h3 className={s.dateWithLine}>{date === currentDate ? 'Сегодня' : date}</h3>
          <Grid container className={s.notesCards}>
            {onSearchNotes
              .filter(
                (note: NoteType) =>
                  date === Intl.DateTimeFormat('en-GB').format(note.date),
              )
              .map((el: NoteType) => (
                <CardItem key={el.id} item={el} />
              ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}
