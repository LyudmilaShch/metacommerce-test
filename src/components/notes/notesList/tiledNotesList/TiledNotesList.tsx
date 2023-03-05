import * as React from 'react';

import Grid from '@mui/material/Grid/Grid';

import { useNotes } from '../../../../store/NoteContext';
import { NoteType } from '../../Notes';

import { CardItem } from './cardItem/CardItem';
import s from './TiledNodesList.module.css';

export function TiledNotesList() {
  const { notes } = useNotes();
  return (
    <div className={s.TiledNotesListContainer}>
      <h3>Сегодня</h3>
      <Grid container className={s.notesCards}>
        {notes.map((el: NoteType) => (
          <CardItem key={el.id} item={el} />
        ))}
      </Grid>
    </div>
  );
}
