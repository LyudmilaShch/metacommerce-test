import { Node } from './note/Note';
import s from './Notes.module.css';

import { NotesList } from 'features/notes/notesList/notesList/NotesList';

export type noteType = {
  id: number;
  name: string;
  date: string;
  text: string;
};
export type notesDataType = noteType[];
export function Notes() {
  const notesData: notesDataType = [
    { id: 1, name: 'Имя', date: '03:24', text: 'какой-то текст' },
    { id: 2, name: 'Два', date: '03:24', text: 'какой-то текст' },
    { id: 3, name: 'Три', date: '03:24', text: 'какой-то текст' },
  ];
  return (
    <div className={s.NotesContainer}>
      <NotesList notesData={notesData} />
      <Node />
      {/* <TiledNotesList /> */}
    </div>
  );
}
