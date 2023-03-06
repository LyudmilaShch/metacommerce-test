import React, {
  createContext,
  SyntheticEvent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { v1 } from 'uuid';

import { NoteType } from 'components';
import { useLocalStorage } from 'hooks';

const NoteContext = createContext<any>({});

export function useNotes() {
  return useContext(NoteContext);
}

export function NoteProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useLocalStorage<any>('notes', []);
  const [selectedNote, setSelectedNote] = useState<NoteType>(notes[0]);
  const [searchParams, setSearchParams] = useState('');
  const [displayType, setDisplayType] = useState<'list' | 'tiledList'>('list');
  const [selectedText, setSelectedText] = useState<null | SyntheticEvent<
    HTMLDivElement,
    Event
  >>(null);

  useEffect(() => {
    if (notes.length) {
      setSelectedNote(notes[0]);
    }
  }, []);

  const onSetSelectedNote = (id: string) => {
    setSelectedNote(notes.find((n: { id: string }) => n.id === id));
  };
  const onCreateNote = () => {
    const newNote = {
      id: v1(),
      name: 'Название',
      date: Date.now(),
      text: '',
    };
    setNotes((prevNotes: NoteType[]) => [newNote, ...prevNotes]);
    setSelectedNote(newNote);
  };
  const onRemoveNote = (id: string) => {
    setNotes(notes.filter((n: NoteType) => n.id !== id));
    setSelectedNote(notes[0]);
  };

  const onUpdateNote = (updatedNote: any) => {
    const updatedNotes = notes.map((note: NoteType) =>
      note.id === updatedNote.id ? updatedNote : note,
    );
    setNotes(updatedNotes);
  };

  const onSearchNotes = useMemo(
    () =>
      notes.filter(
        (note: NoteType) =>
          searchParams === '' ||
          note.name.toLowerCase().includes(searchParams.toLowerCase()) ||
          note.text.toLowerCase().includes(searchParams.toLowerCase()),
      ),
    [searchParams, notes],
  );

  const onSetSelectedText = (e: null | SyntheticEvent<HTMLDivElement, Event>) => {
    setSelectedText(e);
  };
  const onEditNote = (editedNote: any) => {
    const editedNotes = notes.map((note: NoteType) => {
      if (note.id === editedNote.id) return editedNote;
      return note;
    });
    setNotes(editedNotes);
  };
  const onEditField = (value: string) => {
    onEditNote({
      ...selectedNote,
      text: value,
      date: Date.now(),
    });
  };

  const value = useMemo(
    () => ({
      notes,
      onCreateNote,
      onRemoveNote,
      onSetSelectedNote,
      onUpdateNote,
      selectedNote,
      setSearchParams,
      onSearchNotes,
      searchParams,
      selectedText,
      onSetSelectedText,
      onEditField,
      setSelectedText,
      displayType,
      setDisplayType,
    }),
    [notes, selectedNote, searchParams, selectedText, displayType],
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
