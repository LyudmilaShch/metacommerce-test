import * as React from 'react';

import Card from '@mui/material/Card/Card';
import ReactMarkdown from 'react-markdown';

import { noteType } from '../../../Notes';

import s from './CardItem.module.css';

type CardItemType = {
  item: noteType;
  selected: number;
  changeSelectedItem: (newSelected: number) => void;
};

export function CardItem({ item, selected, changeSelectedItem }: CardItemType) {
  const cardClassName = s.card + (selected === item.id ? ` ${s.selectedCard}` : ' ');

  const onClickHandler = () => {
    changeSelectedItem(item.id);
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
