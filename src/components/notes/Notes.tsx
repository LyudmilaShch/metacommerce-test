import { useEditMode } from '../../store/EditModeContext';
import { useNotes } from '../../store/NoteContext';

import { EditNote } from './note/editNote/EditNote';
import { Note } from './note/Note';
import s from './Notes.module.css';
import { TiledNotesList } from './notesList/tiledNotesList/TiledNotesList';

import { NotesList } from 'components/notes/notesList/notesList/NotesList';

export type NoteType = {
  id: string;
  name: string;
  date: Date;
  text: string;
};
export type notesDataType = NoteType[];

export type NotesPropsType = {
  isListDisplay: boolean;
};
export function Notes({ isListDisplay }: NotesPropsType) {
  const { notes, selectedNote } = useNotes();
  const { editMode, onSetEditMode } = useEditMode();

  const selectedItem = notes.find((n: { id: string }) => n.id === selectedNote);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={s.NotesContainer}>
      {isListDisplay ? (
        <>
          <NotesList notesData={notes} setEditMode={onSetEditMode} />
          {editMode ? (
            <EditNote note={selectedItem} />
          ) : (
            <Note note={selectedItem} setEditMode={onSetEditMode} />
          )}
        </>
      ) : (
        <TiledNotesList notesData={notes} />
      )}
    </div>
  );
}
