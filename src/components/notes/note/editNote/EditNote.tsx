import { ChangeEvent, useEffect, useState } from 'react';

import TextField from '@mui/material/TextField/TextField';

import { useNotes } from '../../../../store/NoteContext';
import { NoteType } from '../../Notes';

import s from './EditNote.module.css';

type NodePropsType = {
  note: NoteType;
};

export function EditNote({ note }: NodePropsType) {
  const { onUpdateNote } = useNotes();
  const [name, setName] = useState(note.name);
  const [text, setText] = useState(note.text);

  useEffect(() => {
    setName(note.name);
    setText(note.text);
  }, [note.name, note.text]);

  const onUpdateField = (newName: string, newText: string) => {
    onUpdateNote({
      ...note,
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
  }).format(note?.date) || <br />;

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
