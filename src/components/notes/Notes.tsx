import { useState } from 'react';

import { Note } from './note/Note';
import s from './Notes.module.css';
import { TiledNotesList } from './notesList/tiledNotesList/TiledNotesList';

import { NotesList } from 'components/notes/notesList/notesList/NotesList';

export type noteType = {
  id: number;
  name: string;
  date: Date;
  text: string;
};
export type notesDataType = noteType[];

export type NotesPropsType = {
  isListDisplay: boolean;
};
export function Notes({ isListDisplay }: NotesPropsType) {
  const [selected, setSelectedItem] = useState(1);
  const now = new Date();

  const notesData: notesDataType = [
    { id: 1, name: 'Имя', date: now, text: `**Just** some text` },
    { id: 2, name: 'Два', date: now, text: `**какой-то** текст` },
    { id: 3, name: 'Три', date: now, text: `какой-то **текст**` },
  ];
  const changeSelectedItem = (newSelected: number) => {
    setSelectedItem(newSelected);
  };

  const selectedItem = notesData.find(n => n.id === selected);

  return (
    <div className={s.NotesContainer}>
      {isListDisplay ? (
        <>
          <NotesList
            notesData={notesData}
            selected={selected}
            changeSelectedItem={changeSelectedItem}
          />
          <Note note={selectedItem} />
        </>
      ) : (
        <TiledNotesList
          notesData={notesData}
          selected={selected}
          changeSelectedItem={changeSelectedItem}
        />
      )}
    </div>
  );
}
