import * as React from 'react';

import Card from '@mui/material/Card/Card';
import ReactMarkdown from 'react-markdown';

import { NoteType } from '../../../Notes';

import s from './CardItem.module.css';

import { useNotes } from 'store/NoteContext';

type CardItemType = {
  item: NoteType;
};

export function CardItem({ item }: CardItemType) {
  const { selectedNote, onSetSelectedNote } = useNotes();
  const cardClassName = s.card + (selectedNote === item.id ? ` ${s.selectedCard}` : ' ');

  const onClickHandler = () => {
    onSetSelectedNote(item.id);
  };

  const stringTime = Intl.DateTimeFormat('ru', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(item.date) || <br />;

  return (
    <div className={s.notesListContainer}>
      <Card className={cardClassName} onClick={onClickHandler}>
        <h3>{item.name}</h3>
        <ReactMarkdown>{item.text}</ReactMarkdown>
      </Card>
      <div className={s.cardDescription}>
        <div>{item.name}</div>
        <div className={s.time}>{stringTime}</div>
      </div>
    </div>
  );
}
