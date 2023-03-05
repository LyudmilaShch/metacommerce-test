import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { v1 } from 'uuid';

import { NoteType } from 'components/notes/Notes';
import useLocalStorage from 'hooks/useLocalStorage';

const NoteContext = createContext<any>(null);

export function useNotes() {
  return useContext(NoteContext);
}

export function NoteProvider({ children }: any) {
  const [notes, setNotes] = useLocalStorage<any>('notes', []);
  const [selectedNote, setSelectedNote] = useState({});

  useEffect(() => {
    if (notes.length) {
      setSelectedNote(notes[0]);
    }
  }, []);

  const onSetSelectedNote = (id: string) => {
    setSelectedNote(notes.find((n: { id: string }) => n.id === id));
  };
  const onCreateNote = () => {
    setNotes((prevNotes: NoteType[]) => [
      { id: v1(), name: 'Название', date: Date.now(), text: 'Текст' },
      ...prevNotes,
    ]);
  };
  const onRemoveNote = (id: string) => {
    setNotes(notes.filter((n: NoteType) => n.id !== id));
    setSelectedNote(notes[0]);
  };

  const onUpdateNote = (updatedNote: NoteType) => {
    const updatedNotes = notes.map((note: NoteType) =>
      note.id === updatedNote.id ? updatedNote : note,
    );
    setNotes(updatedNotes);
  };

  const value = useMemo(
    () => ({
      notes,
      onCreateNote,
      onRemoveNote,
      onSetSelectedNote,
      onUpdateNote,
      selectedNote,
    }),
    [notes, selectedNote],
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
