import * as React from 'react';

import { notesDataType } from '../../Notes';

import { CardItem } from './cardItem/CardItem';
import s from './TiledNodesList.module.css';

type TiledNotesListType = {
  notesData: notesDataType;
  selected: number;
  changeSelectedItem: (newSelected: number) => void;
};
export function TiledNotesList({
  notesData,
  selected,
  changeSelectedItem,
}: TiledNotesListType) {
  return (
    <div className={s.TiledNotesListContainer}>
      <h3>Сегодня</h3>
      <div className={s.notesCards}>
        {notesData.map(el => (
          <CardItem
            key={el.id}
            item={el}
            selected={selected}
            changeSelectedItem={changeSelectedItem}
          />
        ))}
      </div>
    </div>
  );
}
