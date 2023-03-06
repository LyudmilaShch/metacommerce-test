import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

import s from './ListItem.module.css';

import { NoteType } from 'components';
import { useNotes } from 'store';

type ListItemComponentType = {
  item: NoteType;
  setEditMode: (value: boolean) => void;
};

export function ListItemComponent({ item, setEditMode }: ListItemComponentType) {
  const { selectedNote, onSetSelectedNote, onSetSelectedText } = useNotes();
  const onClickHandler = () => {
    onSetSelectedNote(item.id);
    setEditMode(false);
    onSetSelectedText(null);
  };
  const ListItemContainerClassName =
    s.ListItemContainer + (selectedNote.id === item.id ? ` ${s.selectedItem}` : ' ');

  const stringTime = Intl.DateTimeFormat('ru', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(item.date) || <br />;

  return (
    <ListItemButton
      className={ListItemContainerClassName}
      onClick={onClickHandler}
      selected={selectedNote === item.id}
    >
      <ListItem alignItems="flex-start" className={s.listItem}>
        <ListItemText
          primary={<p className={s.primaryText}>{item.name}</p>}
          secondary={
            <Typography className={s.secondaryText} component="span">
              {stringTime}
              <div className={s.itemText}>
                <ReactMarkdown>
                  {item.text.length ? item.text : 'Нет дополнительного текста'}
                </ReactMarkdown>
              </div>
            </Typography>
          }
        />
      </ListItem>
    </ListItemButton>
  );
}
