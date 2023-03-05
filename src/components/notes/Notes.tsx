import { useEditMode } from '../../store/EditModeContext';
import { useNotes } from '../../store/NoteContext';

import { Note } from './note/Note';
import s from './Notes.module.css';

import { NotesList } from 'components/notes/notesList/notesList/NotesList';

export type NoteType = {
  id: string;
  name: string;
  date: Date;
  text: string;
};
export type notesDataType = NoteType[];

export function Notes() {
  const { notes } = useNotes();
  const { onSetEditMode } = useEditMode();

  return (
    <div className={s.NotesContainer}>
      <NotesList notesData={notes} setEditMode={onSetEditMode} />
      <div className={s.noteList}>
        <Note />
      </div>
    </div>
  );
}
