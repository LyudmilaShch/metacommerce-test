import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';

import TextField from '@mui/material/TextField/TextField';

import s from './EditNote.module.css';

import { useNotes } from 'store';

export function EditNote() {
  const { onUpdateNote, notes, selectedNote, onSetSelectedText } = useNotes();
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const selectedItem = notes.find((n: { id: string }) => n.id === selectedNote.id);

  useEffect(() => {
    setName(selectedItem.name);
    setText(selectedItem.text);
  }, [selectedItem.name, selectedItem.text]);

  const onUpdateField = (newName: string, newText: string) => {
    onUpdateNote({
      ...selectedItem,
      name: newName.length > 0 ? newName : 'Название',
      text: newText,
      date: Date.now(),
    });
  };
  const onNameChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(e.currentTarget.value);
    onUpdateField(e.currentTarget.value, text);
  };

  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setText(e.currentTarget.value);
    onUpdateField(name, e.currentTarget.value);
  };

  const onTextSelect = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    onSetSelectedText(e);
  };

  const stringDate = Intl.DateTimeFormat('ru', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(selectedItem?.date) || <br />;

  return (
    <div className={s.editNoteContainer}>
      <div className={s.noteDate}>{stringDate}</div>
      <div className={s.textFieldsContainer}>
        <TextField
          id="name"
          value={name}
          onChange={onNameChange}
          className={s.nameTextField}
        />
        <TextField
          id="text"
          multiline
          minRows={10}
          value={text}
          onChange={onTextChange}
          onSelect={onTextSelect}
        />
      </div>
    </div>
  );
}
