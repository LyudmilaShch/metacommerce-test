import * as React from 'react';

import { notesDataType } from '../../Notes';

import { CardItem } from './cardItem/CardItem';
import s from './TiledNodesList.module.css';

type TiledNotesListType = {
  notesData: notesDataType;
};
export function TiledNotesList({ notesData }: TiledNotesListType) {
  return (
    <div className={s.TiledNotesListContainer}>
      <h3>Сегодня</h3>
      <div className={s.notesCards}>
        {notesData.map(el => (
          <CardItem key={el.id} item={el} />
        ))}
      </div>
    </div>
  );
}
