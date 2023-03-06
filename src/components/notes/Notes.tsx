import { Note } from './note';
import s from './Notes.module.css';
import { NotesList } from './notesList';

import { useEditMode, useNotes } from 'store';

export type NoteType = {
  id: string;
  name: string;
  date: number;
  text: string;
};
export type notesDataType = NoteType[];

export function Notes() {
  const { onSearchNotes } = useNotes();
  const { onSetEditMode } = useEditMode();

  return (
    <div className={s.NotesContainer}>
      <NotesList notesData={onSearchNotes} setEditMode={onSetEditMode} />
      <div className={s.noteList}>
        <Note />
      </div>
    </div>
  );
}
