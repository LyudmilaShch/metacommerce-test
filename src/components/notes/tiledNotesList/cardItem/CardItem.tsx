import * as React from 'react';

import Card from '@mui/material/Card/Card';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

import { NoteType } from '../../Notes';

import s from './CardItem.module.css';

import { useNotes } from 'store';

type CardItemType = {
  item: NoteType;
};

export function CardItem({ item }: CardItemType) {
  const { onSetSelectedNote } = useNotes();
  const navigate = useNavigate();

  const onClickHandler = () => {
    onSetSelectedNote(item.id);
    navigate(`/:${item.id}`);
  };

  const stringTime = Intl.DateTimeFormat('ru', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(item.date) || <br />;

  return (
    <div className={s.notesListContainer}>
      <Card className={s.card} onClick={onClickHandler}>
        <h3>{item.name}</h3>
        <ReactMarkdown>{item.text}</ReactMarkdown>
      </Card>
      <div className={s.cardDescription}>
        <div className={s.nameNote}>{item.name}</div>
        <div className={s.time}>{stringTime}</div>
      </div>
    </div>
  );
}
