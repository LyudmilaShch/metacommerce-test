import { ChangeEvent, useEffect, useState } from 'react';

import TextField from '@mui/material/TextField/TextField';

import s from './EditNote.module.css';

import { useNotes } from 'store/NoteContext';

export function EditNote() {
  const { onUpdateNote, notes, selectedNote } = useNotes();
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

  const stringDate = Intl.DateTimeFormat('ru', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(selectedItem?.date) || <br />;

  return (
    <div className={s.editNoteContainer}>
      <div className={s.noteDate}>{stringDate}</div>
      <div className={s.textFieldsContainer}>
        <TextField
          value={name}
          onChange={onNameChange}
          variant="standard"
          label="Название"
        />
        <TextField multiline minRows={10} value={text} onChange={onTextChange} />
      </div>
    </div>
  );
}
